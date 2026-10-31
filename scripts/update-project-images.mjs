import fs from 'node:fs';
import path from 'node:path';

const projectsPath = path.resolve('lib/data/projects.ts');
let code = fs.readFileSync(projectsPath, 'utf8');

const idMap = {
  'preyt-platform': '/projects/real/preyt-platform.png',
  'edu-platform-premium': '/projects/real/edu-platform-premium.png',
  'edu-platform-accessible': '/projects/real/edu-platform-accessible.png',
  'integral-labs-v2': '/projects/real/integral-labs-v2.png',
  'integral-labs-v1': '/projects/real/integral-labs-v1.png',
  'business-consulting-premium': '/projects/real/business-consulting-premium.png',
  'business-consulting-mid': '/projects/real/business-consulting-mid.png',
  'business-solutions-lite': '/projects/real/business-solutions-lite.png',
  'labs-portal': '/projects/real/labs-portal.png',
  'bro-uni': '/projects/real/bro-uni.png',
  'atoz-ecommerce': '/projects/real/atoz-ecommerce.png',
  'travicars': '/projects/real/travicars.png',
  'rozcars': '/projects/real/rozcars.png',
  'ukdrip': '/projects/real/ukdrip.png',
  'aurya-products': '/projects/real/business-solutions-lite.png',
  'cafe-max-premium': '/projects/real/cafe-max-premium.png',
  'edu-reach-max': '/projects/real/edu-reach-max.png',
  'exam-planner': '/projects/real/exam-planner.png',
  'cafe-max-lite': '/projects/real/cafe-max-lite.png',
  'integral-cafe': '/projects/real/integral-cafe.png',
};

// Split by project objects
const projectBlocks = code.split(/(?=\{\s*id:\s*")/g);

const updatedBlocks = projectBlocks.map(block => {
  const matchId = block.match(/id:\s*"([^"]+)"/);
  if (!matchId) return block;

  const id = matchId[1];
  const realImg = idMap[id];
  if (!realImg) return block;

  // Replace image: "..."
  let updated = block.replace(/image:\s*"[^"]+"/, `image: "${realImg}"`);
  // Replace screenshots: ["..."]
  updated = updated.replace(/screenshots:\s*\[[\s\S]*?\]/, `screenshots: [\n      "${realImg}",\n    ]`);
  return updated;
});

const updatedCode = updatedBlocks.join('');
fs.writeFileSync(projectsPath, updatedCode, 'utf8');
console.log('Successfully updated lib/data/projects.ts with real screenshot paths!');
