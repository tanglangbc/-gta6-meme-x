// Entry program for gta6-meme-x-01 (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme picture (meme.png) posted from a
// public account with the caption in CAPTION.txt. This program only hands the
// post's address to the gate: it copies POST.json from the repository root to
// /output/POST.json. POST.json starts as a placeholder — replace it with the
// real post URL (https://x.com/<handle>/status/<id>) after posting, before
// submitting.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
