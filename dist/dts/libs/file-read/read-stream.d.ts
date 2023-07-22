import { ServerResponse, IncomingMessage } from 'http';
declare const readStream: (filePath: string, res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
}) => Promise<void>;
export default readStream;
//# sourceMappingURL=read-stream.d.ts.map