/* eslint-env node */
import { execFileSync } from 'node:child_process';

const minimum = [11, 5, 1];
const version = execFileSync('npm', ['--version'], {
  encoding: 'utf8'
}).trim();
const current = version.split('.').map(Number);

for (let index = 0; index < minimum.length; index += 1) {
  if (current[index] > minimum[index]) {
    process.exit(0);
  }

  if (current[index] < minimum[index]) {
    throw new Error(`npm ${version} does not satisfy >=11.5.1`);
  }
}
