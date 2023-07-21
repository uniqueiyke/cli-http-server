const defaultOptions = [
    {
        option: '--dir',
        dValue: process.cwd(),
        alias: '-d',
        type: 'string',
        description: 'The full path to the directory that contains your static assets'
    },
    {
        option: '--index',
        dValue: 'index.html',
        alias: '-i',
        type: 'string',
        description: 'The file name of the html file to be served as the index (or root) file - home page  by the server. Default index.html'
    },
    {
        option: '--port',
        dValue: 9696,
        alias: '-p',
        type: 'number',
        description: 'The port on which the server serves the html file. Default 9696'
    },
    {
        option: '--open',
        dValue: true,
        alias: '-o',
        type: 'boolean',
        description: 'Open a browser when the server start. Default true'
    },
    {
        option: '--no-open',
        dValue: false,
        alias: '-no-o',
        description: 'Do not open a browser when the server start. Default false'
    },
    {
        option: '--watch',
        dValue: true,
        alias: '-w',
        type: 'boolean',
        description: 'If true, force the page to reload when file in the directory change'
    },
    {
        option: '--no-watch',
        dValue: false,
        alias: '-no-w',
        description: 'If true, force the page to reload when file in the directory change'
    },
]

export default defaultOptions;