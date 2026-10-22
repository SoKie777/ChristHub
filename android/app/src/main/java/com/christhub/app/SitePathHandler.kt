package com.christhub.app

import android.content.res.AssetManager
import android.webkit.WebResourceResponse
import androidx.webkit.WebViewAssetLoader
import java.io.IOException

// Serves the static export (assets/www) like a web server: "documents/x/" is
// "documents/x/index.html", unknown paths get 404.html.
class SitePathHandler(private val assets: AssetManager) : WebViewAssetLoader.PathHandler {
    private val mimeTypes = mapOf(
        "html" to "text/html",
        "js" to "text/javascript",
        "css" to "text/css",
        "json" to "application/json",
        "txt" to "text/plain",
        "svg" to "image/svg+xml",
        "png" to "image/png",
        "ico" to "image/x-icon",
        "woff2" to "font/woff2",
        "woff" to "font/woff",
    )

    override fun handle(path: String): WebResourceResponse? {
        val clean = path.substringBefore('?').trimStart('/')
        val candidates = if (clean.isEmpty() || clean.endsWith("/")) {
            listOf("${clean}index.html")
        } else {
            listOf(clean, "$clean/index.html")
        }
        for (candidate in candidates) {
            val response = open(candidate, 200, "OK")
            if (response != null) return response
        }
        return open("404.html", 404, "Not Found")
    }

    private fun open(file: String, status: Int, reason: String): WebResourceResponse? = try {
        val stream = assets.open("www/$file")
        val mime = mimeTypes[file.substringAfterLast('.', "")] ?: "application/octet-stream"
        WebResourceResponse(mime, "utf-8", status, reason, mapOf("Cache-Control" to "no-cache"), stream)
    } catch (e: IOException) {
        null
    }
}
