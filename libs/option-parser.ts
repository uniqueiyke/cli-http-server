import { Command } from 'commander';
import defaultOptions from './cli-defaul-options';
import pkg from '../package.json'

const cliOptionsParse = new Command();

cliOptionsParse.name('Simple-local-web-server')
    .description(`${pkg.description}`)
    .version(`${pkg.version}`, '-v, --version', 'Print the app version')


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