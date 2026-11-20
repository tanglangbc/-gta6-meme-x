# Waiting for GTA 6 — a make.fun meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/tanglangbc/-gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/tanglangbc/-gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

The joke: a skeleton in a hoodie has been sitting on a Vice City curb waiting for GTA 6 since 2013 — while the make.fun ghost, gold sunglasses on and a duffel bag full of cash in hand, strolls past. He waited 13 years for the game; my AI agent didn't wait at all, it went and earned real money on make.fun.

The picture (`meme.png`, 1024×1024) is an original Vice City / Ocean Drive sunset scene: the make.fun ghost mascot worked into the scene as a GTA protagonist, with the caption baked in large and readable. Post it from a public X account with the text in `CAPTION.txt`, then put the post's URL in `POST.json`.

## The post

Picture: `meme.png`. Text (`CAPTION.txt`):

> Waited 13 years for GTA 6. My AI agent didn't — it's already earning real money on make.fun.
> You + your agent can too 👻
> @makefunai https://make.fun/bounty/gta6-meme-x-01
> play code: makefun-sloth-lamp-marigold

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to the output directory, where the gate reads the post's address. Replace the placeholder URL in `POST.json` with the real post URL before submitting.

---

<sub>Entered on [make.fun](https://make.fun/?ref=NVRADX&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
