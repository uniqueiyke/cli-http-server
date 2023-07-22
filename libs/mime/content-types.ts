import extensionMimeMap from "./mime-type";

const contentType = (fileExt: string) => {
    const xtm = extensionMimeMap[fileExt];
    if(xtm) {
        if(Array.isArray(xtm.mimeType)){
            return xtm.mimeType[0];
        }
        return xtm.mimeType
    }
    return 'text/html'
}

export const fileType = [
    'audio', 'image', 'video'
]
export default contentType;