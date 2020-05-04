import * as FS from 'fs';

export function makeDir(path: string) {
  if (!FS.existsSync(path)) {
    FS.mkdirSync(path);
  }
}
