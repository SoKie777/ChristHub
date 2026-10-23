package com.christhub.app

import android.app.AlarmManager
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.LocalTime
import java.time.ZoneId

// Daily reminders, like Duolingo: one at the time the learner chose, and a
// « ta lampe vacille » rescue at 21:00 when a streak is at risk. No server: the
// web app tells us its settings and the last day practised, and an inexact
// alarm wakes ReminderReceiver, which stays silent if today is already done.
object Reminders {
    private const val CHANNEL = "rappels"
    private const val PREFS = "christhub.reminders"
    private const val RESCUE_HOUR = 21
    const val EXTRA_KIND = "kind"
    const val KIND_DAILY = "daily"
    const val KIND_RESCUE = "rescue"

    fun prefs(context: Context): SharedPreferences = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE)

    /** Saves what the web app sends, then plans the next alarm. */
    fun configure(context: Context, enabled: Boolean, hour: Int, minute: Int, lastDay: String, streak: Int) {
        prefs(context).edit()
            .putBoolean("enabled", enabled)
            .putInt("hour", hour.coerceIn(0, 23))
            .putInt("minute", minute.coerceIn(0, 59))
            .putString("lastDay", lastDay)
            .putInt("streak", streak)
            .apply()
        schedule(context)
    }

    fun schedule(context: Context) {
        val alarms = context.getSystemService(AlarmManager::class.java)
        val pending = { kind: String ->
            PendingIntent.getBroadcast(
                context,
                0,
                Intent(context, ReminderReceiver::class.java).putExtra(EXTRA_KIND, kind),
                PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT,
            )
        }
        alarms.cancel(pending(KIND_DAILY))

        val p = prefs(context)
        if (!p.getBoolean("enabled", false)) return

        // The next moment among the chosen time and the evening rescue, today or tomorrow.
        val now = LocalDateTime.now()
        val chosen = LocalTime.of(p.getInt("hour", 19), p.getInt("minute", 0))
        val rescue = LocalTime.of(RESCUE_HOUR, 0)
        val candidates = buildList {
            for (day in listOf(LocalDate.now(), LocalDate.now().plusDays(1))) {
                add(day.atTime(chosen) to KIND_DAILY)
                if (chosen.isBefore(rescue)) add(day.atTime(rescue) to KIND_RESCUE)
            }
        }
        val (time, kind) = candidates.filter { it.first.isAfter(now) }.minBy { it.first }
        val millis = time.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli()
        alarms.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, millis, pending(kind))
    }

    fun notify(context: Context, kind: String) {
        val p = prefs(context)
        val streak = p.getInt("streak", 0)
        // Today already practised: nothing to remind.
        if (p.getString("lastDay", "") == LocalDate.now().toString()) return
        // The rescue only makes sense when there is a streak to save.
        if (kind == KIND_RESCUE && streak <= 0) return

        val (title, text) = if (kind == KIND_RESCUE) {
            listOf(
                "Ta lampe vacille 🪔" to "Ta série de $streak jour${if (streak > 1) "s" else ""} s'éteint à minuit. Une portion suffit pour la garder allumée !",
                "$streak jour${if (streak > 1) "s" else ""} de fidélité !" to "Ne les laisse pas s'éteindre ce soir. Biblo croit en toi 📖",
                "Il est encore temps 🙏" to "Cinq minutes avec Dieu avant de dormir, et ta lampe brille encore demain.",
            ).random()
        } else {
            listOf(
                "Biblo t'attend 📖" to "Ta portion du jour est prête. Cinq minutes avec Dieu ?",
                "Crucy a gardé ta place ✝️" to "Lire, se regarder dans le miroir, prier : c'est parti ?",
                "Un moment avec Dieu ?" to "Ta lampe n'attend que toi pour briller aujourd'hui 🪔",
                "Ta portion du jour" to "Une vérité à méditer, une prière de 15 secondes. Tu viens ?",
            ).random()
        }

        val manager = context.getSystemService(NotificationManager::class.java)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            manager.createNotificationChannel(
                NotificationChannel(CHANNEL, "Rappels quotidiens", NotificationManager.IMPORTANCE_DEFAULT).apply {
                    description = "Un rappel par jour pour garder ta lampe allumée"
                },
            )
        }
        val open = PendingIntent.getActivity(
            context,
            1,
            Intent(context, MainActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP),
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT,
        )
        val notification = NotificationCompat.Builder(context, CHANNEL)
            .setSmallIcon(R.drawable.ic_notification)
            .setColor(0xFF00E5F0.toInt())
            .setContentTitle(title)
            .setContentText(text)
            .setStyle(NotificationCompat.BigTextStyle().bigText(text))
            .setContentIntent(open)
            .setAutoCancel(true)
            .build()
        if (NotificationManagerCompat.from(context).areNotificationsEnabled()) {
            try {
                NotificationManagerCompat.from(context).notify(1, notification)
            } catch (_: SecurityException) {
                // Permission withdrawn in the meantime.
            }
        }
    }
}

/** Fires at the planned time, shows the reminder if needed, then plans the next one. */
class ReminderReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        Reminders.notify(context, intent.getStringExtra(Reminders.EXTRA_KIND) ?: Reminders.KIND_DAILY)
        Reminders.schedule(context)
    }
}

/** Alarms do not survive a restart: plan the next one again. */
class BootReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == Intent.ACTION_BOOT_COMPLETED) Reminders.schedule(context)
    }
}
