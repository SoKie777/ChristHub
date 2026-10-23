package com.christhub.app

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import androidx.core.app.NotificationManagerCompat
import androidx.core.content.ContextCompat
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat

// ChristHub in a WebView: the built app is embedded in the APK (assets/www) and
// served from https://appassets.androidplatform.net, so that progress stays in
// the WebView's localStorage, offline.
class MainActivity : Activity() {
    private lateinit var webView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Edge to edge on every version (Android 15 imposes it): the page is
        // padded by the system bars, the notch and the keyboard instead.
        WindowCompat.setDecorFitsSystemWindows(window, false)

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/", SitePathHandler(assets))
            .build()

        webView = WebView(this)
        webView.setBackgroundColor(ContextCompat.getColor(this, R.color.surface))
        setContentView(webView)
        ViewCompat.setOnApplyWindowInsetsListener(webView) { view, insets ->
            val bars = insets.getInsets(
                WindowInsetsCompat.Type.systemBars() or WindowInsetsCompat.Type.displayCutout() or WindowInsetsCompat.Type.ime(),
            )
            view.setPadding(bars.left, bars.top, bars.right, bars.bottom)
            WindowInsetsCompat.CONSUMED
        }
        // The app is always dark: light icons on the system bars.
        WindowInsetsControllerCompat(window, webView).apply {
            isAppearanceLightStatusBars = false
            isAppearanceLightNavigationBars = false
        }
        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            allowFileAccess = false
            allowContentAccess = false
            // Sounds play on the first tap without a second gesture.
            mediaPlaybackRequiresUserGesture = false
            textZoom = (resources.configuration.fontScale * 100).toInt().coerceIn(90, 115)
        }
        webView.webViewClient = object : WebViewClientCompat() {
            override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest): WebResourceResponse? =
                assetLoader.shouldInterceptRequest(request.url)

            // Links to other sites open in the browser.
            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                if (request.url.host == WebViewAssetLoader.DEFAULT_DOMAIN) return false
                startActivity(Intent(Intent.ACTION_VIEW, request.url))
                return true
            }
        }

        // The only bridge to native code: daily reminders. Only our own pages are
        // loaded in this WebView (other links open in the browser).
        webView.addJavascriptInterface(ReminderBridge(), "ChristHubAndroid")

        if (savedInstanceState != null) webView.restoreState(savedInstanceState)
        else webView.loadUrl("https://${WebViewAssetLoader.DEFAULT_DOMAIN}/")
    }

    inner class ReminderBridge {
        @JavascriptInterface
        fun configure(enabled: Boolean, hour: Int, minute: Int, lastDay: String, streak: Int) =
            Reminders.configure(applicationContext, enabled, hour, minute, lastDay, streak)

        @JavascriptInterface
        fun notificationsAllowed(): Boolean = NotificationManagerCompat.from(applicationContext).areNotificationsEnabled()

        /** Android 13+ asks the user once; older versions allow notifications by default. */
        @JavascriptInterface
        fun requestPermission() {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
                checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED
            ) {
                runOnUiThread { requestPermissions(arrayOf(Manifest.permission.POST_NOTIFICATIONS), 1) }
            }
        }
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        webView.saveState(outState)
    }

    @Deprecated("Still called on all supported versions without the predictive back flag")
    override fun onBackPressed() {
        if (webView.canGoBack()) webView.goBack() else super.onBackPressed()
    }
}
