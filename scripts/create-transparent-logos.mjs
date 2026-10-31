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

// Function to encode RGBA buffer to PNG
function createPng(rgbaBuffer, w, h) {
  const rowLen = w * 4 + 1;
  const filtered = Buffer.alloc(h * rowLen);
  
  for (let y = 0; y < h; y++) {
    filtered[y * rowLen] = 0; // Filter None
    rgbaBuffer.copy(filtered, y * rowLen + 1, y * w * 4, (y + 1) * w * 4);
  }
  
  const compressed = zlib.deflateSync(filtered);
  
  // PNG signature
  const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  
  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type 6: RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace
  
  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcVal = crc32(Buffer.concat([typeBuf, data]));
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeInt32BE(crcVal, 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }
  
  // Simple CRC32 implementation
  function crc32(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c ^= buf[i];
      for (let k = 0; k < 8; k++) {
        c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
      }
    }
    return (c ^ 0xffffffff) | 0;
  }
  
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

// 1. Create Transparent White Logo (for dark backgrounds)
const whiteRgba = Buffer.alloc(width * height * 4);
// 2. Create Transparent Dark Slate Logo (#0f172a) (for light backgrounds)
const darkRgba = Buffer.alloc(width * height * 4);

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const r = uncompressed[idx];
    const g = uncompressed[idx + 1];
    const b = uncompressed[idx + 2];
    const brightness = (r + g + b) / 3;
    
    // Alpha based on brightness
    const alpha = brightness > 30 ? Math.min(255, Math.floor((brightness / 255) * 255)) : 0;
    
    // White version
    whiteRgba[idx] = 255;
    whiteRgba[idx + 1] = 255;
    whiteRgba[idx + 2] = 255;
    whiteRgba[idx + 3] = alpha;
    
    // Dark slate version (#0f172a = 15, 23, 42)
    darkRgba[idx] = 15;
    darkRgba[idx + 1] = 23;
    darkRgba[idx + 2] = 42;
    darkRgba[idx + 3] = alpha;
  }
}

fs.writeFileSync('public/integral-logo-white.png', createPng(whiteRgba, width, height));
fs.writeFileSync('public/integral-logo-dark.png', createPng(darkRgba, width, height));

console.log('Successfully generated transparent PNGs:');
console.log(' - public/integral-logo-white.png');
console.log(' - public/integral-logo-dark.png');
