"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const readStream = (filePath, res) => {
    return new Promise((resolve, reject) => {
        const stream = (0, fs_1.createReadStream)(filePath);
        stream.on('error', (error) => {
            reject(error);
        });
        stream.pipe(res);
        stream.on('end', () => {
            resolve();
        });
    });
};
exports.default = readStream;
//# sourceMappingURL=read-stream.js.map