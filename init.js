#!/usr/bin/env node
const fs = require('fs');

fs.writeFileSync(
  '.prettierrc.js',
  'module.exports = {\n' +
  '  singleQuote: true,\n' +
  '};\n'
)

fs.writeFileSync(
  '.eslintrc.js',
  'module.exports = {\n' +
  '  extends: \'typescript-prettier\',\n' +
  '};\n'
)

fs.writeFileSync(
  '.eslintignore',
  '/dist\n'
)

console.log('✅ Done')
