plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

// Version number: GitHub Actions run number (1 locally).
val buildNumber = (System.getenv("GITHUB_RUN_NUMBER") ?: "1").toInt()
// Permanent signing key (GitHub secrets): Android only installs an update
// signed with the same key as the installed app.
val keystoreFile = System.getenv("KEYSTORE_FILE")?.let { file(it) }?.takeIf { it.exists() }

android {
    namespace = "com.christhub.app"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.christhub.app"
        minSdk = 26
        targetSdk = 35
        versionCode = buildNumber
        versionName = "1.0.$buildNumber"
    }

    signingConfigs {
        if (keystoreFile != null) {
            create("release") {
                storeFile = keystoreFile
                storePassword = System.getenv("KEYSTORE_PASSWORD")
                keyAlias = System.getenv("KEY_ALIAS")
                keyPassword = System.getenv("KEY_PASSWORD")
            }
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.findByName("release") ?: signingConfigs.getByName("debug")
        }
    }
    // The static export lives in folders starting with "_" (_next/, __next.*/),
    // which the default pattern ("<dir>_*") would leave out of the APK.
    androidResources {
        ignoreAssetsPattern = "!.svn:!.git:!.ds_store:!*.scc:!CVS:!thumbs.db:!picasa.ini:!*~"
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.13.1")
    implementation("androidx.webkit:webkit:1.12.1")
}
