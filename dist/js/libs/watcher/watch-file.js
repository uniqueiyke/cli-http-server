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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
class fileWatcher {
    constructor(filePath, options, port, fileTypes) {
        this.__watchFiles = () => __awaiter(this, void 0, void 0, function* () {
            var _a, e_1, _b, _c;
            if (typeof this.__options === 'object' && this.__options !== null && !Array.isArray(this.__options)) {
                this.__options = Object.assign(Object.assign({}, this.__options), { recursive: true });
            }
            else {
                this.__options = { recursive: true };
            }
            try {
                const watcherEvents = (0, promises_1.watch)(this.__filePath, this.__options);
                console.dir(`watcher watching over ${this.__filePath}`);
                try {
                    for (var _d = true, watcherEvents_1 = __asyncValues(watcherEvents), watcherEvents_1_1; watcherEvents_1_1 = yield watcherEvents_1.next(), _a = watcherEvents_1_1.done, !_a;) {
                        _c = watcherEvents_1_1.value;
                        _d = false;
                        try {
                            const event = _c;
                            if (event.eventType === 'change') {
                                const filename = event.filename;
                                if (this.__allFiles || this.__fileTypes.includes((0, node_path_1.extname)(filename !== null ? filename.toString('utf8') : ''))) {
                                    console.dir(`${event.filename} changed`);
                                    console.log('Refreshing the page');
                                    if (this.__watcherServer !== null) {
                                        this.__watcherServer.emit('reload');
                                    }
                                }
                            }
                        }
                        finally {
                            _d = true;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_d && !_a && (_b = watcherEvents_1.return)) yield _b.call(watcherEvents_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            catch (err) {
                throw err;
            }
        });
        this.__registerListeners = () => __awaiter(this, void 0, void 0, function* () {
            this.__watcherServer.on("listening", () => {
                console.log(`WebSocket Server is running on port: ${this.__port}`);
            });
            this.__watcherServer.on("reload", () => {
                this.__watcherServer.clients.forEach((client) => {
                    client.send("RELOAD");
                });
            });
            this.__watcherServer.on('error', (error) => {
                console.log(error.message);
            });
            this.__watcherServer.on('close', () => {
                console.log('whoops..... Socket closed');
            });
        });
        this.startWatching = () => {
            this.__registerListeners();
            this.__watchFiles();
        };
        this.__filePath = filePath;
        this.__options = options && options;
        this.__port = port || 9697;
        this.__fileTypes = fileTypes;
        this.__allFiles = (fileTypes === undefined || !Array.isArray(fileTypes)) ? true : false;
        this.__watcherServer = new ws_1.WebSocketServer({
            port: this.__port,
        });
    }
}
const startWatcherServer = (filePath, options, port, fileTypes) => {
    new fileWatcher(filePath, options, port, fileTypes).startWatching();
};
exports.default = startWatcherServer;
//# sourceMappingURL=watch-file.js.map