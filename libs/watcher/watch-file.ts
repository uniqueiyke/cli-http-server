import { WebSocketServer } from "ws";
import { watch } from 'node:fs/promises';
import { extname } from 'node:path'

class fileWatcher {
    private __filePath: string;
    private __options: any;
    private __fileTypes: string[];
    private __port: number;
    private __allFiles: boolean;
    private __watcherServer: any;

    constructor(filePath: string, options: any, port: number, fileTypes: string[]) {
        this.__filePath = filePath;
        this.__options = options && options;
        this.__port = port || 9697;
        this.__fileTypes = fileTypes
        this.__allFiles = (fileTypes === undefined || !Array.isArray(fileTypes)) ? true : false
        this.__watcherServer = new WebSocketServer({
            port: this.__port,
        });
    }

    __watchFiles = async () => {
        if (typeof this.__options === 'object' && this.__options !== null && !Array.isArray(this.__options)) {
            this.__options = { ...this.__options, recursive: true }
        } else {
            this.__options = { recursive: true }
        }
        try {
            const watcherEvents = watch(this.__filePath, this.__options);
            console.dir(`watcher watching over ${this.__filePath}`);
            for await (const event of watcherEvents) {
                if (event.eventType === 'change') {
                    const filename : string|Buffer|null = event.filename;
                    if (this.__allFiles || this.__fileTypes.includes(extname( filename !== null ? filename.toString('utf8') : '' ))) {
                        console.dir(`${event.filename} changed`);
                        console.log('Refreshing the page');
                        if (this.__watcherServer !== null) {
                            this.__watcherServer.emit('reload');
                        }
                    } 
                }
            }
        } catch (err) {
            throw err;
        }
    };

    __registerListeners = async () => {
        this.__watcherServer.on("listening", () => {
            console.log(`WebSocket Server is running on port: ${this.__port}`);
        });

        this.__watcherServer.on("reload", () => {
            this.__watcherServer.clients.forEach((client: { send: (arg0: string) => void; }) => {
                client.send("RELOAD");
            });
        });

        this.__watcherServer.on('error', (error: { message: any; }) => {
            console.log(error.message)
        })

        this.__watcherServer.on('close', () => {
            console.log('whoops..... Socket closed')
        })
    }

    startWatching = () => {
        this.__registerListeners()
        this.__watchFiles();
    }
}


const startWatcherServer = (filePath: string, options: undefined, port: number, fileTypes: string[]) => {
    new fileWatcher(filePath, options, port, fileTypes).startWatching()
}

export default startWatcherServer;