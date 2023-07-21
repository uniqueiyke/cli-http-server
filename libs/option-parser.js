import { Command } from 'commander';
import defaultOptions from './cli-defaul-options.js';
const cliOptionsParse = new Command();

cliOptionsParse.name('Simple-local-web-server')
    .description('Local web page server for web developement')
    .version('1.0.0', '-v, --version', 'Print the app version')


for (const dOption of defaultOptions) {
    if (dOption.type) {
        cliOptionsParse.option(`${dOption.alias}, ${dOption.option} <${dOption.type}>`, dOption.description, dOption.dValue);
    }
    else {
        cliOptionsParse.option(`${dOption.alias}, ${dOption.option}`, dOption.description, dOption.dValue);
    }
}

cliOptionsParse.parse();
export default cliOptionsParse;