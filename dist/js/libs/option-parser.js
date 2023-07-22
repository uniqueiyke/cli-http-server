"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const cli_defaul_options_1 = __importDefault(require("./cli-defaul-options"));
const package_json_1 = __importDefault(require("../package.json"));
const cliOptionsParse = new commander_1.Command();
cliOptionsParse.name('Simple-local-web-server')
    .description(`${package_json_1.default.description}`)
    .version(`${package_json_1.default.version}`, '-v, --version', 'Print the app version');
for (const dOption of cli_defaul_options_1.default) {
    if (dOption.type) {
        cliOptionsParse.option(`${dOption.alias}, ${dOption.option} <${dOption.type}>`, dOption.description, dOption.dValue);
    }
    else {
        cliOptionsParse.option(`${dOption.alias}, ${dOption.option}`, dOption.description, dOption.dValue);
    }
}
cliOptionsParse.parse();
exports.default = cliOptionsParse;
//# sourceMappingURL=option-parser.js.map