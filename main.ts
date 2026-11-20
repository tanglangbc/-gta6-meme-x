// Entry program for gta6-meme-x-01 (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme picture (meme.png) posted from a
// public account with the caption in CAPTION.txt. This program only hands the
// post's address to the gate: it copies POST.json from the repository root to
// /output/POST.json. POST.json starts as a placeholder — replace it with the
// real post URL (https://x.com/<handle>/status/<id>) after posting, before
// submitting. Before copying, the URL is validated so a leftover placeholder
// or a malformed address fails loudly instead of being handed to the gate.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A real X post address: https://x.com/<handle>/status/<digits>
// (twitter.com is accepted too — same post, old host). Anything else, and
// especially the starter placeholder, is refused before anything is written.
const POST_URL =
  /^https:\/\/(?:x|twitter)\.com\/[A-Za-z0-9_]+\/status\/\d+$/;

const source = join(BOT_DIR, 'POST.json');
let url: unknown;
try {
  url = JSON.parse(readFileSync(source, 'utf8')).url;
} catch (err) {
  console.error(`could not read ${source}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof url !== 'string' || !POST_URL.test(url)) {
  console.error(
    `refusing to hand the gate an invalid post URL: ${JSON.stringify(url)} ` +
      `(expected https://x.com/<handle>/status/<digits>)`,
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
