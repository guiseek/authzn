import {
  readProjectConfiguration,
  generateFiles,
  formatFiles,
  names,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { FacadeGeneratorSchema } from './schema';

export async function facadeGenerator(
  tree: Tree,
  options: FacadeGeneratorSchema
) {
  const project = readProjectConfiguration(tree, options.project);

  let directory = `${project.sourceRoot}/lib/application`;

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    directory,
    names(options.name)
  );

  await formatFiles(tree);
}

export default facadeGenerator;
