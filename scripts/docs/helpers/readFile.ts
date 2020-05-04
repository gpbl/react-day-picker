import * as FS from 'fs';

export function readFile(path: string) {
  return FS.readFileSync(path).toString();
}
