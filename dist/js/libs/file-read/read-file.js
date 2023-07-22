"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = require("node:path");
const option_parser_1 = __importDefault(require("../option-parser"));
const util_funcs_1 = require("../util-funcs");
const readFileContent = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    const opts = option_parser_1.default.opts();
    let isToWatch = (0, util_funcs_1.parseOptvalue)(opts.watch);
    isToWatch = (!isToWatch || isToWatch === 'false') ? false : true;
    try {
        if (filePath.endsWith('client-script.js')) {
            const ws_port = parseInt((0, util_funcs_1.parseOptvalue)(opts.wsport)) || parseInt((0, util_funcs_1.parseOptvalue)(opts.port)) + 1;
            const clientScriptBuf = yield promises_1.default.readFile(filePath);
            const clientScriptStr = clientScriptBuf.toString().replace(' = 9697', ` = ${ws_port}`);
            return Buffer.from(clientScriptStr);
        }
        let fileContent = yield promises_1.default.readFile(filePath);
        if (isToWatch && ((0, node_path_1.extname)(filePath) === '.html' || (0, node_path_1.extname)(filePath) === '.htm')) {
            const fileContentStr = fileContent
                .toString()
                .replace("</body>", '<script src="client-script.js"></script></body>');
            fileContent = Buffer.from(fileContentStr);
        }
        return fileContent;
    }
    catch (error) {
        throw error;
    }
});
exports.default = readFileContent;
//# sourceMappingURL=read-file.js.map