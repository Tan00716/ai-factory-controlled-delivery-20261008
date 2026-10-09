/* global process */
const fs = require('node:fs');
const { normalize } = require('./normalize.cjs');

let output;
try {
  const input = JSON.parse(fs.readFileSync(0, 'utf8'));
  if (input === null || typeof input !== 'object' || Array.isArray(input)) {
    throw new TypeError('INVALID_INPUT');
  }
  const tags = normalize(input.tags);
  output = JSON.stringify({ tags, count: tags.length });
} catch {
  process.stderr.write('INVALID_INPUT\n');
  process.exitCode = 2;
}

if (output !== undefined) {
  process.stdout.write(output);
}
