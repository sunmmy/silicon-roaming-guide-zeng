import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const width = 1600;
const height = 1000;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f4efe6"/>
      <stop offset="0.52" stop-color="#fff9ee"/>
      <stop offset="1" stop-color="#e9f0eb"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="4" seed="17"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.18"/>
      </feComponentTransfer>
    </filter>
    <pattern id="grid" width="52" height="52" patternUnits="userSpaceOnUse">
      <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#24211d" stroke-width="1" opacity="0.08"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#paper)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <circle cx="250" cy="220" r="380" fill="#0f766e" opacity="0.12"/>
  <circle cx="1290" cy="160" r="320" fill="#b34d2e" opacity="0.10"/>
  <circle cx="1180" cy="780" r="360" fill="#244d7a" opacity="0.08"/>
  <rect width="100%" height="100%" filter="url(#grain)"/>
</svg>
`;

await mkdir("public/images", { recursive: true });
await writeFile(
  "public/images/site-texture.png",
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer(),
);
