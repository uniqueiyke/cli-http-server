type value = {
    ext: string,
    mimeType: string | string[],
    docType: string
}

const extensionMimeMap : {[key: string]: value} = {
    ".aac": {
        "ext": ".aac",
        "mimeType": "audio/aac",
        "docType": "AAC audio"
    },
    ".abw": {
        "ext": ".abw",
        "mimeType": "application/x-abiword",
        "docType": "AbiWord document"
    },
    ".arc": {
        "ext": ".arc",
        "mimeType": "application/x-freearc",
        "docType": "Archive document (multiple files embedded)"
    },
    ".avif": {
        "ext": ".avif",
        "mimeType": "image/avif",
        "docType": "AVIF image"
    },
    ".avi": {
        "ext": ".avi",
        "mimeType": "video/x-msvideo",
        "docType": "AVI: Audio Video Interleave"
    },
    ".azw": {
        "ext": ".azw",
        "mimeType": "application/vnd.amazon.ebook",
        "docType": "Amazon Kindle eBook format"
    },
    ".bin": {
        "ext": ".bin",
        "mimeType": "application/octet-stream",
        "docType": "Any kind of binary data"
    },
    ".bmp": {
        "ext": ".bmp",
        "mimeType": "image/bmp",
        "docType": "Windows OS/2 Bitmap Graphics"
    },
    ".bz": {
        "ext": ".bz",
        "mimeType": "application/x-bzip",
        "docType": "BZip archive"
    },
    ".bz2": {
        "ext": ".bz2",
        "mimeType": "application/x-bzip2",
        "docType":  "BZip2 archive"
    },
    ".cda": {
        "ext": ".cda",
        "mimeType": "application/x-cdf",
        "docType": "CD audio"
    },
    ".csh": {
        "ext": ".csh",
        "mimeType": "application/x-csh",
        "docType": "C-Shell script"
    },
    ".css": {
        "ext": ".css",
        "mimeType": "text/css",
        "docType": "Cascading Style Sheets (CSS)"
    },
    ".csv": {
        "ext": ".csv",
        "mimeType": "text/csv",
        "docType": "Comma-separated values (CSV)"
    },
    ".doc": {
        "ext": ".doc",
        "mimeType": "application/msword",
        "docType": "Microsoft Word"
    },
    ".docx": {
        "ext": ".docx",
        "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "docType": "Microsoft Word (OpenXML)"
    },
    ".eot": {
        "ext": ".eot",
        "mimeType": "application/vnd.ms-fontobject",
        "docType": "MS Embedded OpenType fonts"
    },
    ".epub": {
        "ext": ".epub",
        "mimeType": "application/epub+zip",
        "docType": "Electronic publication (EPUB)"
    },
    ".gz": {
        "ext": ".gz",
        "mimeType": "application/gzip",
        "docType": "GZip Compressed Archive"
    },
    ".gif": {
        "ext": ".gif",
        "mimeType": "image/gif",
        "docType": "Graphics Interchange Format (GIF)"
    },
    ".htm": {
        "ext": ".htm",
        "mimeType": "text/html",
        "docType": "HyperText Markup Language (HTML)"
    },
    ".html": {
        "ext": ".html",
        "mimeType": "text/html",
        "docType": "HyperText Markup Language (HTML)"
    },
    ".ico": {
        "ext": ".ico",
        "mimeType": ["image/vnd.microsoft.icon", "image/x-icon"],
        "docType": "Icon format"
    },
    ".ics": {
        "ext": ".ics",
        "mimeType": "text/calendar",
        "docType": "iCalendar format"
    },
    ".jar": {
        "ext": ".jar",
        "mimeType": "application/java-archive",
        "docType": "Java Archive (JAR)"
    },
    ".jpeg": {
        "ext": ".jpeg",
        "mimeType": "image/jpeg",
        "docType": "JPEG images"
    },
    ".jpg": {
        "ext": ".jpg",
        "mimeType": "image/jpeg",
        "docType": "JPEG images"
    },
    ".js": {
        "ext": ".js",
        "mimeType": "text/javascript",
        "docType": "JavaScript"
    },
    ".json": {
        "ext": ".json",
        "mimeType": "application/json",
        "docType": "JSON format"
    },
    ".jsonld": {
        "ext": ".jsonld",
        "mimeType": "application/ld+json",
        "docType": "JSON-LD format"
    },
    ".mid": {
        "ext": ".mid",
        "mimeType": [".midi", "audio/x-midi"],
        "docType": "Musical Instrument Digital Interface (MIDI)"
    },
    ".midi": {
        "ext": ".midi",
        "mimeType": [".midi", "audio/x-midi"],
        "docType": "Musical Instrument Digital Interface (MIDI)"
    },
    ".mjs": {
        "ext": ".mjs",
        "mimeType": "text/javascript",
        "docType": "JavaScript module"
    },
    ".mp3": {
        "ext": ".mp3",
        "mimeType": "audio/mpeg",
        "docType": "MP3 audio"
    },
    ".mp4": {
        "ext": ".mp4",
        "mimeType": "video/mp4",
        "docType": "MP4 video"
    },
    ".mpeg": {
        "ext": ".mpeg",
        "mimeType": "video/mpeg",
        "docType": "MPEG Video"
    },
    ".mpkg": {
        "ext": ".mpkg",
        "mimeType": "application/vnd.apple.installer+xml",
        "docType": "Apple Installer Package"
    },
    ".odp": {
        "ext": ".odp",
        "mimeType": "application/vnd.oasis.opendocument.presentation",
        "docType": "OpenDocument presentation document"
    },
    ".ods": {
        "ext": ".ods",
        "mimeType": "application/vnd.oasis.opendocument.spreadsheet",
        "docType": "OpenDocument spreadsheet document"
    },
    ".odt": {
        "ext": ".odt",
        "mimeType": "application/vnd.oasis.opendocument.text",
        "docType": "OpenDocument text document"
    },
    ".oga": {
        "ext": ".oga",
        "mimeType": "audio/ogg",
        "docType": "OGG audio"
    },
    ".ogv": {
        "ext": ".ogv",
        "mimeType": "video/ogg",
        "docType": "OGG video"
    },
    ".ogx": {
        "ext": ".ogx",
        "mimeType": "application/ogg",
        "docType": "OGG"
    },
    ".opus": {
        "ext": ".opus",
        "mimeType": "audio/opus",
        "docType": "Opus audio"
    },
    ".otf": {
        "ext": ".otf",
        "mimeType": "font/otf",
        "docType": "OpenType font"
    },
    ".png": {
        "ext": ".png",
        "mimeType": "image/png",
        "docType": "Portable Network Graphics"
    },
    ".pdf": {
        "ext": ".pdf",
        "mimeType": "application/pdf",
        "docType": "Adobe Portable Document Format (PDF)"
    },
    ".php": {
        "ext": ".php",
        "mimeType": "application/x-httpd-php",
        "docType": "Hypertext Preprocessor (Personal Home Page)"
    },
    ".ppt": {
        "ext": ".ppt",
        "mimeType": "application/vnd.ms-powerpoint",
        "docType": "Microsoft PowerPoint"
    },
    ".pptx": {
        "ext": ".pptx",
        "mimeType": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "docType": "Microsoft PowerPoint (OpenXML)"
    },
    ".rar": {
        "ext": ".rar",
        "mimeType": "application/vnd.rar",
        "docType": "RAR archive"
    },
    ".rtf": {
        "ext": ".rtf",
        "mimeType": "application/rtf",
        "docType": "Rich Text Format (RTF)"
    },
    ".sh": {
        "ext": ".sh",
        "mimeType": "application/x-sh",
        "docType": "Bourne shell script"
    },
    ".svg": {
        "ext": ".svg",
        "mimeType": "image/svg+xml",
        "docType": "Scalable Vector Graphics (SVG)"
    },
    ".tar": {
        "ext": ".tar",
        "mimeType": "application/x-tar",
        "docType": "Tape Archive (TAR)"
    },
    ".tif": {
        "ext": ".tif",
        "mimeType": "image/tiff",
        "docType": "Tagged Image File Format (TIFF)"
    },
    ".tiff": {
        "ext": ".tiff",
        "mimeType": "image/tiff",
        "docType": "Tagged Image File Format (TIFF)"
    },
    ".ts": {
        "ext": ".ts",
        "mimeType": "video/mp2t",
        "docType": "MPEG transport stream"
    },
    ".ttf": {
        "ext": ".ttf",
        "mimeType": "font/ttf",
        "docType": "TrueType Font"
    },
    ".txt": {
        "ext": ".txt",
        "mimeType": "text/plain",
        "docType": "Text, (generally ASCII or ISO 8859-n)"
    },
    ".vsd": {
        "ext": ".vsd",
        "mimeType": "application/vnd.visio",
        "docType": "Microsoft Visio"
    },
    ".wav": {
        "ext": ".wav",
        "mimeType": "audio/wav",
        "docType": "Waveform Audio Format"
    },
    ".weba": {
        "ext": ".weba",
        "mimeType": "audio/webm",
        "docType": "WEBM audio"
    },
    ".webm": {
        "ext": ".webm",
        "mimeType": "video/webm",
        "docType": "WEBM video"
    },
    ".webp": {
        "ext": ".webp",
        "mimeType": "image/webp",
        "docType": "WEBP image"
    },
    ".woff": {
        "ext": ".woff",
        "mimeType": "font/woff",
        "docType": "Web Open Font Format (WOFF)"
    },
    ".woff2": {
        "ext": ".woff2",
        "mimeType": "font/woff2",
        "docType": "Web Open Font Format (WOFF)"
    },
    ".xhtml": {
        "ext": ".xhtml",
        "mimeType": "application/xhtml+xml",
        "docType": "XHTML"
    },
    ".xls": {
        "ext": ".xls",
        "mimeType": "application/vnd.ms-excel",
        "docType": "Microsoft Excel"
    },
    ".xlsx": {
        "ext": ".xlsx",
        "mimeType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "docType": "Microsoft Excel (OpenXML)"
    },
    ".xml": {
        "ext": ".xml",
        "mimeType": ["application/xml", "text/xml", "application/atom+xml"],
        "docType": "XML"
    },
    ".xul": {
        "ext": ".xul",
        "mimeType": "application/vnd.mozilla.xul+xml",
        "docType": "XUL"
    },
    ".zip": {
        "ext": ".zip",
        "mimeType": "application/zip",
        "docType": "ZIP archive"
    },
    ".3gp": {
        "ext": ".3gp",
        "mimeType": ["video/3gpp", "audio/3gpp"],
        "docType": "3GPP audio/video container"
    },
    ".3g2": {
        "ext": ".3g2",
        "mimeType": ["video/3gpp2", "audio/3gpp2"],
        "docType": "3GPP2 audio/video container"
    },
    ".7z": {
        "ext": ".7z",
        "mimeType": "application/x-7z-compressed",
        "docType": "7-zip archive"
    }
}

export default extensionMimeMap;