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

// Now print the unfiltered clean image
let ascii = '';
for (let y = 0; y < height; y += 2) {
  let line = '';
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * bpp;
    const r = uncompressed[idx];
    const g = uncompressed[idx + 1];
    const b = uncompressed[idx + 2];
    const brightness = (r + g + b) / 3;
    line += brightness > 150 ? '█' : (brightness > 60 ? '░' : ' ');
  }
  ascii += line + '\n';
}

console.log(ascii);
