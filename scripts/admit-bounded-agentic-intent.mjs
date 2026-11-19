#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { validateBoundedAgenticIntent } from "../src/admit-bounded-agentic-intent.mjs";

const input = JSON.parse(await readFile(0, "utf8"));
process.stdout.write(`${JSON.stringify(validateBoundedAgenticIntent(input))}\n`);

