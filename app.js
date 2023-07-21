import http from 'node:http';
import { resolve, extname } from 'node:path';
import { exec } from 'node:child_process';
import util from 'node:util';
import cliOptionsParse from './libs/option-parser.js';
import { parseFileName, parseOptvalue } from './libs/util-funcs.js';
import contentType, { fileType } from './libs/mime/content-types.js';
import readFileContent from './libs/file-read/read-file.js';
import readStream from './libs/file-read/read-stream.js';
import { parseError } from './libs/errors/errors.js';
import serverRootPath from './server-root-path.js';
import startWatcherServer from './libs/watcher/watch-file.js';


async function initServer() {
  try {
    const opts = cliOptionsParse.opts()
    let open = parseOptvalue(opts.open);
    open = (open === 'false' || open === false) ? false : true;
    const port = parseInt(parseOptvalue(opts.port));
    const ws_port = parseInt(parseOptvalue(opts.wsport)) || port + 1;
    const dir = parseOptvalue(opts.dir);
    const indexFile = parseFileName(parseOptvalue(opts.index));
    let isToWatch = parseOptvalue(opts.watch);
    isToWatch = (isToWatch === 'false' || isToWatch === false) ? false : true;

    http.createServer(async (req, res) => {
      try {
        console.log(`${req.method}: ${req.url}`);
        if (req.method === 'GET') {
          if (req.url === '/' || req.url === '') {
            const responseBody = await readFileContent(`${resolve(dir, indexFile)}`)

            res.writeHead(200, {
              'Content-Type': contentType(extname(parseFileName(req.url)) || '.html'),
              "Content-Length": responseBody.length
            });
            res.end(responseBody);
          }
          else if (req.url === '/client-script.js' && isToWatch) {
            const responseBody = await readFileContent(resolve(serverRootPath, 'libs/refresh-client/client-script.js'));
            res.writeHead(200, { 'Content-Type': 'text/javascript', "Content-Length": responseBody.length });
            res.end(responseBody);
          }
          else {
            const mimeType = contentType(extname(parseFileName(req.url)) || '.html');
            if (fileType.includes(mimeType.split('/')[0])) {
              const filePath = `${resolve(dir, parseFileName(req.url))}`;
              res.writeHead(200, {
                'Content-Type': mimeType
              });
              await readStream(filePath, res)
            } else {
              const responseBody = await readFileContent(`${resolve(dir, parseFileName(req.url))}`);
              res.writeHead(200, { 'Content-Type': mimeType, "Content-Length": responseBody.length });
              res.end(responseBody);
            }
          }
        }
      } catch (error) {
        console.error(error.message)
        const er = parseError(error)
        res.writeHead(er.statusCode, er.statusMessage, { 'Connection': 'close' });
        res.end(er.message);
      }
    }).listen(port, async () => {
      console.log(`Listening for requests on localhost:${port}`);
      if (open) {
        const execAsync = util.promisify(exec);
        const { stdout, stderr } = await execAsync(`start http://localhost:${port}/`);
      }
    });

    if (isToWatch) {
      startWatcherServer(dir, undefined, ws_port, ['.html', '.htm', '.css', '.js'])
    }
  } catch (error) {
    console.log(error)
  }
}

export default initServer;