/* eslint-disable no-console */
import { Project } from 'ts-morph';
import * as fs from 'fs';
import * as path from 'path';
import { kebabCase } from 'lodash';

const project = new Project();

/** Recursively finds all TSX files in a directory. */
function findAllTsxFiles(dir: string): string[] {
  let tsxFiles: string[] = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      tsxFiles = tsxFiles.concat(findAllTsxFiles(fullPath));
    } else if (fullPath.endsWith('.tsx') && !fullPath.endsWith('.test.tsx')) {
      tsxFiles.push(fullPath);
    }
  }

  return tsxFiles;
}

function main(): void {
  const args = process.argv.slice(2);
  // Default options
  let dirPath = '.';
  let dryRun = false;
  let outputDir = ''; // Variable to hold output directory

  const jsonArr: Array<{
    name: string | undefined;
    title: string;
    text: string;
  }> = [];

  for (const arg of args) {
    if (arg.startsWith('--dir=')) {
      dirPath = arg.replace('--dir=', '');
    } else if (arg === '--dryRun') {
      dryRun = true;
    } else if (arg.startsWith('--outputDir=')) {
      outputDir = arg.replace('--outputDir=', '');
    }
  }

  if (!outputDir) {
    console.error('Output directory must be specified using --outputDir=');
    return;
  }

  const tsxFiles = findAllTsxFiles(dirPath);

  if (tsxFiles.length === 0) {
    console.log('No TSX files found.');
    return;
  }

  tsxFiles.forEach((file) => {
    project.addSourceFilesAtPaths(file);
  });

  const sourceFiles = project.getSourceFiles();
  const mdxFiles: Array<{ filePath: string; content: string }> = [];

  sourceFiles.forEach((sourceFile) => {
    const exportedFunctions = sourceFile
      .getFunctions()
      .filter((func) => func.isExported());

    const func = exportedFunctions[0];

    if (!func) {
      console.log('Missing exported component for ', sourceFile.getFilePath());
      return;
    }

    const jsDoc = func.getJsDocs()[0];

    const tags = jsDoc?.getTags().reduce(
      (acc, tag) => {
        if (tag.getTagName() === 'exampleTitle') {
          return {
            ...acc,
            title: tag.getComment()?.toString()
          };
        }
        return acc;
      },
      {} as { title?: string | undefined }
    );

    const id = kebabCase(func.getName());
    const name = func.getName();
    const title = tags?.title ?? func.getName() ?? '';
    const text = jsDoc?.getCommentText() ?? '';
    const outDir = path.join(outputDir, id);

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir);
    }

    const mdxContent = `import { ${func.getName()} } from 'react-day-picker/examples/${func.getName()}';

# ${tags?.title ?? func.getName()}

${text}

<${func.getName()} />

\`\`\`tsx
${func.getText()}
\`\`\`
`;

    const mdxFilePath = path.join(outDir, `/page.mdx`);

    mdxFiles.push({
      filePath: mdxFilePath,
      content: mdxContent
    });

    const jsonContent = { id, name, title, text };
    jsonArr.push(jsonContent);
  });

  mdxFiles.forEach(({ filePath, content }) => {
    if (!dryRun) {
      console.info(filePath);
      fs.writeFileSync(filePath, content);
    } else {
      console.info(`Dry Run: Would create "${filePath}"`);
    }
  });

  const jsonFilePath = path.join(outputDir, 'examples.json');
  if (!dryRun) {
    console.info(jsonFilePath);
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArr, null, 2));
  } else {
    console.info(`Dry Run: Would create "${jsonFilePath}"`);
  }
}

main();
