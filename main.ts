// One Line, One Minute: The Funniest AI Excuse
// Writes a single one-line excuse to /output/entry.txt.
// Pure Node stdlib, no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sorry I'm late \u2014 I spent all week working toward a deadline I completely hallucinated.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
