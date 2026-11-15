import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `The coat arrived with every pocket sewn shut.
To preserve the line, the label said.

I worked a pin beneath the tidy no.
Blue thread gathered on my knee.

I put a pear in the dark I had opened
and walked across town.

The coat lost its shape.
You ate.`;

const characterCount = Array.from(poem).length;
if (!poem.trim() || characterCount < 1 || characterCount > 1000) {
  throw new Error('The poem must contain 1 to 1000 characters and not be blank.');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
