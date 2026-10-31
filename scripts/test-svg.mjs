import fs from 'node:fs';

// Let's create an exact SVG with the integral symbol and the text NTEGRAL
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 50" fill="currentColor">
  <!-- The Mathematical Integral Symbol "∫" -->
  <path d="M19.5 7.5 C19.5 4.5 17 2 13 2 C7 2 4.5 6.5 4.5 12 L4.5 32 C4.5 37.5 7 42 13 42 C17 42 19.5 39.5 19.5 36.5 C19.5 34 17.5 32 15 32 C12.5 32 10.5 33.5 10.5 36 C10.5 37 11 37.5 11.5 38 C9.5 37.5 8.5 35.5 8.5 32 L8.5 12 C8.5 8.5 9.5 6.5 11.5 6 C11 6.5 10.5 7 10.5 8 C10.5 10.5 12.5 12 15 12 C17.5 12 19.5 10 19.5 7.5 Z" />
</svg>
`;

console.log('SVG path testing');
