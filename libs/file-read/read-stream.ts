import { createReadStream } from 'fs';
import { ServerResponse, IncomingMessage } from 'http';

const readStream = (filePath: string, res: ServerResponse<IncomingMessage> & { req: IncomingMessage; }) => {
    return new Promise<void>((resolve, reject) => {
        const stream = createReadStream(filePath);
        stream.on('error', (error) => {
            reject(error);
        })
        stream.pipe(res)
        stream.on('end', () => {
            resolve()
        });
    })
}

export default readStream;