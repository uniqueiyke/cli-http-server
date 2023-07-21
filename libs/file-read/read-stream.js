import { createReadStream } from 'fs';

const readStream = (filePath, res) => {
    return new Promise((resolve, reject) => {
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