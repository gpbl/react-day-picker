import * as FS from 'fs';

export function writeFile(path: string, content: string) {
  return FS.writeFileSync(path, content);
}
