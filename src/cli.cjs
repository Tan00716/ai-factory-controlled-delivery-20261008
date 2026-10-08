/* global process */
const fs = require('node:fs');
const { normalize } = require('./normalize.cjs');

try {
  const input = JSON.parse(fs.readFileSync(0, 'utf8'));
  if (
    input === null ||
    typeof input !== 'object' ||
    Array.isArray(input) ||
    !Array.isArray(input.tags) ||
    !input.tags.every((tag) => typeof tag === 'string')
  ) {
    throw new Error('INVALID_INPUT');
  }

  const tags = normalize(input.tags);
  process.stdout.write(JSON.stringify({ tags, count: tags.length }));
} catch {
  process.stderr.write('INVALID_INPUT\n');
  process.exitCode = 2;
}
