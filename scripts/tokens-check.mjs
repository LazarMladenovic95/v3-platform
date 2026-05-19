import fs from "node:fs";

const css = fs.readFileSync("tokens/colors.css", "utf8");
const manifestSrc = fs.readFileSync("tokens/colors.manifest.ts", "utf8");

function normalizeHex(hex) {
  return hex.toLowerCase();
}

function readCssVarHex(cssVar) {
  const re = new RegExp(`${cssVar.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\s*(#[0-9a-fA-F]{3,8})`);
  const match = css.match(re);
  return match ? normalizeHex(match[1]) : null;
}

const rowRe =
  /id: "([^"]+)"[\s\S]*?token: "([^"]+)"[\s\S]*?hex: "([^"]+)"/g;
let match = rowRe.exec(manifestSrc);
const mismatches = [];

while (match) {
  const id = match[1];
  const token = match[2];
  const manifestHex = normalizeHex(match[3]);
  const cssHex = readCssVarHex(token);
  if (!cssHex) {
    mismatches.push({ id, token, reason: "missing in tokens/colors.css" });
  } else if (cssHex !== manifestHex) {
    mismatches.push({ id, token, manifestHex, cssHex });
  }
  match = rowRe.exec(manifestSrc);
}

if (mismatches.length > 0) {
  console.error("tokens:check failed — manifest hex does not match tokens/colors.css:\n");
  for (const item of mismatches) {
    console.error(JSON.stringify(item, null, 2));
  }
  process.exit(1);
}

console.log("tokens:check passed");
