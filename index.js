import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';

const tree = mkdir('nodejs-package', { hidden: true }, [
mkfile('Makefile'),
mkfile('README.md'),
mkdir('dist'),
mkdir('_tests_', { type: 'directory' }, [
mkfile('half.test.js', { type: 'text/javascript' }),
]),
mkfile('babel.config.js', { type: 'text/javascript' }), 
mkdir('node_modules', { owner: 'root', hidden: false }, [ 
mkdir('@babel', [
mkdir('cli', [
mkfile('LICENSE'),
]),
]),
]), 
]);
console.log(tree);