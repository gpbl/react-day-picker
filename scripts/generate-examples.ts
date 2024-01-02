/* eslint-disable no-console */
import { Project } from 'ts-morph';
import * as fs from 'fs';
import * as path from 'path';

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

    const example = exportedFunctions[0];

    if (!example) {
      console.log('Missing app for ', sourceFile.getFilePath());
      return;
    }

    const mdxFileName = sourceFile.getBaseName().replace('.tsx', '.mdx');
    const mdxFilePath = path.join(outputDir, mdxFileName);

    const jsDoc = example.getJsDocs()[0];

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

    const text = `\n${jsDoc?.getCommentText()}\n`;

    const mdxContent = `
import { ${example.getName()} } from 'react-day-picker/examples/${example.getName()}';

# ${tags?.title ?? example.getName()}
${text}
<${example.getName()} />

\`\`\`tsx
${example.getText()}
\`\`\`
`;

    mdxFiles.push({
      filePath: mdxFilePath,
      content: mdxContent
    });

    const jsonContent = {
      name: example.getName(),
      title: tags?.title ?? example.getName() ?? 'Example With No Name',
      text: jsDoc?.getCommentText() ?? ''
    };

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
