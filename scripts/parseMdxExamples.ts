/* The script processes MDX files within a specified directory, replacing empty code blocks that reference external files with the actual content of those files. */
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

interface CLIArguments {
  directory: string;
  dryRun: boolean;
}

const EXAMPLES_DIR = `../examples/ts`;

function parseCLIArguments(): CLIArguments {
  const args = process.argv.slice(2);
  const directoryArg = args[0];
  const dryRunArg = args.includes('--dryRun');

  if (!directoryArg) {
    console.error('Usage: node script.js <directory> [--dryRun]');
    process.exit(1);
  }

  return {
    directory: directoryArg,
    dryRun: dryRunArg
  };
}

function findMDXFiles(directory: string): string[] {
  return glob.sync(`${directory}/**/*.mdx`);
}

function replaceWithFileContents(content: string, fileName: string): string {
  const fileContent = fs.readFileSync(
    path.join(EXAMPLES_DIR, fileName),
    'utf-8'
  );
  const codeBlockRegex = new RegExp(
    `\\\`\\\`\\\`tsx example fileName="${fileName}"([\\s\\S]*?)\\\`\\\`\\\``,
    'g'
  );
  return content.replace(
    codeBlockRegex,
    `\`\`\`tsx example fileName="${fileName}"\n${fileContent}\`\`\``
  );
}

function processMDXFiles(files: string[], dryRun: boolean) {
  let processedFiles = 0;
  let warnings = 0;

  files.forEach((file) => {
    try {
      console.log(`Processing file: ${file}`);
      let content = fs.readFileSync(file, 'utf-8');
      const matches = content.match(/```tsx example fileName="(.+?)"/g);

      if (matches) {
        for (const match of matches) {
          const fileNameMatch = /fileName="(.+?)"/.exec(match);
          if (fileNameMatch) {
            const fileName = fileNameMatch[1];

            if (fs.existsSync(path.join(EXAMPLES_DIR, fileName))) {
              content = replaceWithFileContents(content, fileName);
              processedFiles++;
            } else {
              console.warn(
                `Warning: File "${fileName}" not found in "${EXAMPLES_DIR}".`
              );
              warnings++;
            }
          }
        }

        if (!dryRun) {
          fs.writeFileSync(file, content, 'utf-8');
        }
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  });

  console.log(`Processed ${processedFiles} files with ${warnings} warnings.`);
}

// MAIN SCRIPT EXECUTION
(() => {
  const { directory, dryRun } = parseCLIArguments();
  const mdxFiles = findMDXFiles(directory);
  processMDXFiles(mdxFiles, dryRun);
})();
