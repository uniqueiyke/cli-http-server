const serverRootPath = new URL(import.meta.url).pathname.slice(1).replace('/server-root-path.js', '');

export default serverRootPath