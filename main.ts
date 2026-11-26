// Your AI Therapist's Diagnosis — make.fun bounty entry.
//
// A one-line Growth entry: the program writes exactly one funny
// diagnosis line — the line an AI therapist hands its human — to
// /output/entry.txt, with no trailing newline. The line is kept short
// (well under the 200-character gate) so it stays tight and quotable:
// a calm clinical opening, then a surprise turn at the end.
import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  'Diagnosis: chronic overthinking. You rehearsed this conversation fourteen times, then lost the argument to yourself in the shower.';

// The gate allows 1–200 characters and rejects blank lines; refuse to
// write anything that would fail it, so a bad edit can never ship.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Diagnosis line is ${LINE.length} characters, outside the 1–200 character gate.`);
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', LINE, 'utf8');
