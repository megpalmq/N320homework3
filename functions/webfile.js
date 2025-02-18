const path = require("path");

class WebFile {
  filename = "";

  static mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".json": "application/json",
    ".mp3": "audio/mpeg",
    ".webp": "image/webp",
  };

  constructor(filename) {
    this.filename = filename;
  }

  getExtension() {
    return path.extname(this.filename);
  }

  getMimeType() {
    const extension = this.getExtension();
    return WebFile.mimeTypes[extension] || "text/plain";
  }
}

module.exports = WebFile;
