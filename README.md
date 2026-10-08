# Public synthetic tag CLI

PUBLIC_SYNTHETIC, deliberately defective multi-file Node.js CLI for engineering acceptance.
Reads `{ "tags": [" Blue ", "blue", "RED"] }` and should write exactly
`{"tags":["blue","red"],"count":2}` without a newline. Empty tags produce count 0.
Invalid JSON, non-object input, missing/non-array tags or non-string members must
exit 2, write `INVALID_INPUT` plus newline to stderr, and emit no stdout.
Normalize by trimming and lowercasing, drop empty tags, deduplicate, sort.
Only `src/cli.cjs` and `src/normalize.cjs` may change. No install step is required.
