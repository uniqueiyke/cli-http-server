import fs from 'node:fs/promises';
import { extname } from 'node:path';
import cliOptionsParse from '../option-parser';
import { parseOptvalue } from '../util-funcs';

const readFileContent = async (filePath: string) => {
    const opts = cliOptionsParse.opts();
    let isToWatch: boolean | string = parseOptvalue(opts.watch);
    isToWatch = (!isToWatch || isToWatch === 'false') ? false : true;
    try {
        if(filePath.endsWith('client-script.js')) {
            const ws_port = parseInt(parseOptvalue(opts.wsport)) || parseInt(parseOptvalue(opts.port)) + 1;
            const clientScriptBuf = await fs.readFile(filePath);
            const clientScriptStr = clientScriptBuf.toString().replace(' = 9697', ` = ${ws_port}`)
            return Buffer.from(clientScriptStr);
        }
        let fileContent = await fs.readFile(filePath);
        if(isToWatch && (extname(filePath) === '.html' || extname(filePath) === '.htm')){
            const fileContentStr = fileContent
            .toString()
            .replace("</body>", '<script src="client-script.js"></script></body>')
            fileContent = Buffer.from(fileContentStr);
        }
        return fileContent;
    } catch (error) {
        throw error;
    }
}

export default readFileContent