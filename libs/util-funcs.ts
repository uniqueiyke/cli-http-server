import {extname} from 'node:path';

const parseOptvalue = (val: string) => {
  if (typeof val !== 'string') {
    return val
  }
  return val.startsWith('=') ? val.slice(1) : val;
}

const parseFileName = (f: string) => {
  if (f.startsWith('/')) {
    f = f.slice(1);
  }
  if (!extname(f)) {
    return `${f}.html`;
  }
  return f;
}

export { parseOptvalue, parseFileName }