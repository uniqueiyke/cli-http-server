"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const node_http_1 = __importDefault(require("node:http"));
const node_path_1 = require("node:path");
const node_child_process_1 = require("node:child_process");
const node_util_1 = __importDefault(require("node:util"));
const option_parser_1 = __importDefault(require("./libs/option-parser"));
const util_funcs_1 = require("./libs/util-funcs");
const content_types_1 = __importStar(require("./libs/mime/content-types"));
const read_file_1 = __importDefault(require("./libs/file-read/read-file"));
const read_stream_1 = __importDefault(require("./libs/file-read/read-stream"));
const errors_1 = require("./libs/errors/errors");
const watch_file_1 = __importDefault(require("./libs/watcher/watch-file"));
function initServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const opts = option_parser_1.default.opts();
            let open = (0, util_funcs_1.parseOptvalue)(opts.open);
            open = (!open || open === 'false') ? false : true;
            const port = parseInt((0, util_funcs_1.parseOptvalue)(opts.port));
            const ws_port = parseInt((0, util_funcs_1.parseOptvalue)(opts.wsport)) || port + 1;
            const dir = (0, util_funcs_1.parseOptvalue)(opts.dir);
            const indexFile = (0, util_funcs_1.parseFileName)((0, util_funcs_1.parseOptvalue)(opts.index));
            let isToWatch = (0, util_funcs_1.parseOptvalue)(opts.watch);
            isToWatch = (!isToWatch || isToWatch === 'false') ? false : true;
            const serverRootPath = module.path;
            node_http_1.default.createServer((req, res) => __awaiter(this, void 0, void 0, function* () {
                try {
                    console.log(`${req.method}: ${req.url}`);
                    if (req.method === 'GET') {
                        if (req.url === '/' || req.url === '') {
                            const responseBody = yield (0, read_file_1.default)(`${(0, node_path_1.resolve)(dir, indexFile)}`);
                            res.writeHead(200, {
                                'Content-Type': (0, content_types_1.default)((0, node_path_1.extname)((0, util_funcs_1.parseFileName)(req.url)) || '.html'),
                                "Content-Length": responseBody.length
                            });
                            res.end(responseBody);
                        }
                        else if (req.url === '/client-script.js' && isToWatch) {
                            const responseBody = yield (0, read_file_1.default)((0, node_path_1.resolve)(serverRootPath, 'libs/refresh-client/client-script.js'));
                            res.writeHead(200, { 'Content-Type': 'text/javascript', "Content-Length": responseBody.length });
                            res.end(responseBody);
                        }
                        else {
                            const mimeType = (0, content_types_1.default)((0, node_path_1.extname)((0, util_funcs_1.parseFileName)(req.url || '')) || '.html');
                            if (content_types_1.fileType.includes(mimeType.split('/')[0])) {
                                const filePath = `${(0, node_path_1.resolve)(dir, (0, util_funcs_1.parseFileName)(req.url || ''))}`;
                                res.writeHead(200, {
                                    'Content-Type': mimeType
                                });
                                yield (0, read_stream_1.default)(filePath, res);
                            }
                            else {
                                const responseBody = yield (0, read_file_1.default)(`${(0, node_path_1.resolve)(dir, (0, util_funcs_1.parseFileName)(req.url || ''))}`);
                                res.writeHead(200, { 'Content-Type': mimeType, "Content-Length": responseBody.length });
                                res.end(responseBody);
                            }
                        }
                    }
                }
                catch (error) {
                    console.error(error.message);
                    const er = (0, errors_1.parseError)(error);
                    res.writeHead(er.statusCode, er.statusMessage, { 'Connection': 'close' });
                    res.end(er.message);
                }
            })).listen(port, () => __awaiter(this, void 0, void 0, function* () {
                console.log(`Listening for requests on localhost:${port}`);
                if (open) {
                    const execAsync = node_util_1.default.promisify(node_child_process_1.exec);
                    const { stdout, stderr } = yield execAsync(`start http://localhost:${port}/`);
                }
            }));
            if (isToWatch) {
                (0, watch_file_1.default)(dir, undefined, ws_port, ['.html', '.htm', '.css', '.js']);
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = initServer;
//# sourceMappingURL=app.js.map