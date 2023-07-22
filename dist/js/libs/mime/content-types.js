"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileType = void 0;
const mime_type_1 = __importDefault(require("./mime-type"));
const contentType = (fileExt) => {
    const xtm = mime_type_1.default[fileExt];
    if (xtm) {
        if (Array.isArray(xtm.mimeType)) {
            return xtm.mimeType[0];
        }
        return xtm.mimeType;
    }
    return 'text/html';
};
exports.fileType = [
    'audio', 'image', 'video'
];
exports.default = contentType;
//# sourceMappingURL=content-types.js.map