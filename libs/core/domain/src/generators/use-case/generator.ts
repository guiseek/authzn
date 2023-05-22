import {
  readProjectConfiguration,
  generateFiles,
  formatFiles,
  names,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { UseCaseGeneratorSchema } from './schema';

function normalizeNames(
  options: Pick<UseCaseGeneratorSchema, 'name' | 'input' | 'output'>
) {
  return {
    name: names(options.name),
    input: names(options.input),
    output: names(options.output),
  };
}

export async function useCaseGenerator(
  tree: Tree,
  options: UseCaseGeneratorSchema
) {
  const project = readProjectConfiguration(tree, options.project);

  let directory = `${project.sourceRoot}/lib/use-cases`;

  if (options.directory) {
    directory = directory + `/${options.directory}`;
  }

  const substitutions = normalizeNames(options);

  const { fileName } = substitutions.name;

  generateFiles(tree, path.join(__dirname, 'files'), directory, {
    ...substitutions,
    fileName,
  });
  await formatFiles(tree);
}

export default useCaseGenerator;
