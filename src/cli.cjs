/* global process */
const fs = require('node:fs');
const { normalize } = require('./normalize.cjs');
const input = JSON.parse(fs.readFileSync(0, 'utf8'));
process.stdout.write(
  JSON.stringify({ tags: normalize(input.tags), count: input.tags.length }),
);
