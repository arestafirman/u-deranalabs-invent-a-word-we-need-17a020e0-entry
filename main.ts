// Readhush — Invent a Word We Need
// Entry: a coinage for the silence in a group chat after your message
// is read by everyone and answered by no one.
//
// Readhush = read + hush. "Read" because the message has been seen —
// the read receipts prove it. "Hush" because the reply that should
// follow never comes. The word names the exact moment a group chat
// goes quiet on you: read by all, answered by none.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Readhush (n.) — the silence in a group chat after your message is read by 12 people and answered by none.";

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry must be 1–140 characters, got ${ENTRY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
