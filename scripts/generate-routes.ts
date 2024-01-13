import fs from 'fs';
import path from 'path';

const [srcDir, destDir, dryRun] = process.argv.slice(2);

const copyAndRenameFiles = (
  srcDir: string,
  destDir: string,
  dryRun: boolean
) => {
  const items = fs.readdirSync(srcDir, { withFileTypes: true });

  items.forEach((item) => {
    const srcPath = path.join(srcDir, item.name);
    const destPath = path.join(destDir, item.name);

    if (item.isDirectory()) {
      if (!dryRun) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      console.log(`Creating directory: ${destPath}`);
      copyAndRenameFiles(srcPath, destPath, dryRun);
    } else if (item.isFile() && path.extname(item.name) === '.md') {
      let destPathMdx = destPath.replace('.md', '.mdx');
      if (item.name.toLowerCase() === 'readme.md') {
        destPathMdx = path.join(destDir, '_index.mdx');
      }
      if (!dryRun) {
        fs.copyFileSync(srcPath, destPathMdx);
      }
      console.log(`Copying file: ${srcPath} to ${destPathMdx}`);
    }
  });
};

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

copyAndRenameFiles(srcDir, destDir, dryRun === '--dry-run');
