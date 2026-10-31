import fs from 'node:fs';
import zlib from 'node:zlib';

const buf = fs.readFileSync('public/integral-logo.png');

let offset = 8;
const idatChunks = [];
let width = 0, height = 0;

while (offset < buf.length) {
  const length = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IHDR') {
    width = buf.readUInt32BE(offset + 8);
    height = buf.readUInt32BE(offset + 12);
  } else if (type === 'IDAT') {
    idatChunks.push(buf.subarray(offset + 8, offset + 8 + length));
  }
  offset += 12 + length;
}

const idatData = Buffer.concat(idatChunks);
const rawData = zlib.inflateSync(idatData);

const bpp = 4;
const rowSize = width * bpp;
const uncompressed = Buffer.alloc(width * height * bpp);

function paethPredictor(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

let srcPos = 0;
for (let y = 0; y < height; y++) {
  const filterType = rawData[srcPos++];
  const dstRow = y * rowSize;
  const prevDstRow = (y - 1) * rowSize;

  for (let x = 0; x < rowSize; x++) {
    const rawByte = rawData[srcPos++];
    const left = x >= bpp ? uncompressed[dstRow + x - bpp] : 0;
    const up = y > 0 ? uncompressed[prevDstRow + x] : 0;
    const upLeft = (y > 0 && x >= bpp) ? uncompressed[prevDstRow + x - bpp] : 0;

    let val = 0;
    if (filterType === 0) val = rawByte;
    else if (filterType === 1) val = rawByte + left;
    else if (filterType === 2) val = rawByte + up;
    else if (filterType === 3) val = rawByte + Math.floor((left + up) / 2);
    else if (filterType === 4) val = rawByte + paethPredictor(left, up, upLeft);

    uncompressed[dstRow + x] = val & 0xff;
  }
}

// Find bounding boxes of each character
// Let's print out the exact columns where the integral symbol is:
// In ASCII art, it's roughly x=7 to x=25, y=10 to y=38
console.log('Bitmap ready. Width:', width, 'Height:', height);

// Let's create an SVG that encodes the exact shape using rects or vector path
// We can generate an SVG path from horizontal spans (run-length encoding)
let pathData = '';
for (let y = 0; y < height; y++) {
  let spanStart = -1;
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * bpp;
    const brightness = (uncompressed[idx] + uncompressed[idx+1] + uncompressed[idx+2]) / 3;
    const isFilled = brightness > 90;
    if (isFilled && spanStart === -1) {
      spanStart = x;
    } else if (!isFilled && spanStart !== -1) {
      pathData += `M${spanStart},${y}h${x - spanStart}v1h${spanStart - x}z `;
      spanStart = -1;
    }
  }
  if (spanStart !== -1) {
    pathData += `M${spanStart},${y}h${width - spanStart}v1h${spanStart - width}z `;
  }
}

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 48" fill="currentColor">
  <path d="${pathData}" />
</svg>`;

fs.writeFileSync('public/integral-logo.svg', svgContent);
console.log('Generated public/integral-logo.svg successfully!');
