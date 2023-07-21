import fs from 'node:fs/promises';
import { extname } from 'node:path';
import cliOptionsParse from '../option-parser.js';
import { parseOptvalue } from '../util-funcs.js';

const readFileContent = async (filePath, option) => {
    const opts = cliOptionsParse.opts();
    let isToWatch = parseOptvalue(opts.watch);
    isToWatch = (isToWatch === 'false' || isToWatch === false) ? false : true;
    try {
        if(filePath.endsWith('client-script.js')) {
            const ws_port = parseInt(parseOptvalue(opts.wsport)) || parseInt(parseOptvalue(opts.port)) + 1;
            const clientScriptBuf = await fs.readFile(filePath, option);
            const clientScriptStr = clientScriptBuf.toString().replace(' = 9697', ` = ${ws_port}`)
            return Buffer.from(clientScriptStr);
            // return Buffer.from(clientScript(ws_port));
        }
        let fileContent = await fs.readFile(filePath, option);
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