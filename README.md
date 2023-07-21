# local-server

A local web  server is a command line application for serving static web pages on a local developmeant machine. It watches for file change and refresh your page.


## Installation

`npm install local-server`

## Usage
Install the pa globally using the npm installation command

##### install via npm
`npm i -g local-server`

##### install via yarn
`yarn add local-server`

require it in your file
```javascript
const localServer = require('local-server');
```

Start the server by cd to you project folder and running the command `serverlc` on the command line window.

### To Start Server
run `serverlc` on the cli window. Make sure you are running the command on your project directory. If your run the command on another directory other than your project directory, then you have to pass the full path to your project directory as an option us using `--dir` or `-d` cli option.
Example `serverlc --dir='C:/some-folder/anoter-folder/this-folder'` Where this-folder should be the main folder that contains your project

When the above command is ran on the cli window, the server will start on the default port of 9696 on your development machine. You can change the port by using `--port` or `-p` cli option. e.g `serverlc --port=3030`

when the starts, it will serve any index.html file on the  current working directory as the home page. That is `localhost:port/` will default to any index.html file on your project folder. If you do not have any file named index.html or you want to use to another file, you can pass the file name to the cli option `--index` or `-i`. e.g  `serverlc -i=app.html`.
You can navigate to other pages by using the relative path to the file as the url. e.g `localhost:port/about` will server the about.html file the `<root>` directory while `localhost:port/page/about` will serve the about.html file in the `<root>/page` folder.
If you want the server to serve any other file type other than .html file, then you have to include the file extention as in `localhost:port/my-image.png` or `localhost:port/pgk.json`.

### cli options:
  -v, --version          Print the app version
  -d, --dir <string>     The full path to the directory 
                         that contains your static assets (Default:
                         "C:/current/working/directory")
  -i, --index <string>   The file name of the html file 
                        to be served as the index (or root) file -
                         home page  by the server. Default index.html (Default: "index.html")
  -p, --port <number>    The port on which the server 
                         serves the html file. (Default:
                         9696)
  -o, --open <boolean>   Open a browser when the server 
                         start. (Default: true)
  -no-o, --no-open       Do not open a browser when the 
                         server start. value false
  -w, --watch <boolean>  If true, force the page to 
                         reload when file in the directory change  (Default: true)
  -no-w, --no-watch      If true, force the page to 
                         reload when file in the directory change (value: false)
  -h, --help             display help for command



## License
License under the
[MIT](https://github.com/uniqueiyke/local-dev-server/blob/main/LICENSE)