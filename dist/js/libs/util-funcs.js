"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFileName = exports.parseOptvalue = void 0;
const node_path_1 = require("node:path");
const parseOptvalue = (val) => {
    if (typeof val !== 'string') {
        return val;
    }
    return val.startsWith('=') ? val.slice(1) : val;
};
exports.parseOptvalue = parseOptvalue;
const parseFileName = (f) => {
    if (f.startsWith('/')) {
        f = f.slice(1);
    }
    if (!(0, node_path_1.extname)(f)) {
        return `${f}.html`;
    }
    return f;
};
exports.parseFileName = parseFileName;
//# sourceMappingURL=util-funcs.js.map