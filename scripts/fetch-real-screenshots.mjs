import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, "..", "public", "projects", "real");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// All real project sites from Integral Labs
const projects = [
  { id: "preyt-platform", url: "https://preyt.integralgroups.in/" },
  { id: "edu-platform-premium", url: "https://education-med.vercel.app/" },
  { id: "edu-platform-accessible", url: "https://education-easy.vercel.app/" },
  { id: "integral-labs-v2", url: "https://integral-labs2-mcaf.vercel.app/" },
  { id: "integral-labs-v1", url: "https://integral-labs1.vercel.app/" },
  { id: "business-consulting-premium", url: "https://business-top.vercel.app/" },
  { id: "business-consulting-mid", url: "https://business-med.vercel.app/" },
  { id: "business-solutions-lite", url: "https://business-low.vercel.app/" },
  { id: "labs-portal", url: "https://labs.integralgroups.in/" },
  { id: "bro-uni", url: "https://bro-uni-2.vercel.app/" },
  { id: "atoz-ecommerce", url: "https://atoz-git-main-aryan0724s-projects.vercel.app/" },
  { id: "travicars", url: "https://travicars-demo-3wa9.vercel.app/" },
  { id: "rozcars", url: "https://roz-car-demo.vercel.app/" },
  { id: "ukdrip", url: "https://ukdrip-seven.vercel.app/" },
  { id: "cafe-max-premium", url: "https://portfoliosite-labs-cafe-max-4dls.vercel.app/" },
  { id: "edu-reach-max", url: "https://portfoliosite-labs-edu-max.vercel.app/" },
  { id: "exam-planner", url: "https://examplanner-og.vercel.app/" },
  { id: "cafe-max-lite", url: "https://portfoliosite-labs-cafe-max.vercel.app/" },
  { id: "integral-cafe", url: "https://portfoliosite-integral-labs-cafe-ba-tau.vercel.app/" },
];

async function run() {
  console.log(`Starting real-time screenshot fetch for ${projects.length} sites...`);

  for (const project of projects) {
    const dest = path.join(targetDir, `${project.id}.png`);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 50000) {
      console.log(`[SKIP] Already have high-res screenshot for ${project.id}`);
      continue;
    }

    console.log(`[FETCH] Capturing real-time homepage of ${project.id} (${project.url})...`);
    try {
      const captureUrl = `https://image.thum.io/get/width/1200/crop/800/${project.url}`;
      execSync(`curl.exe -L -s -o "${dest}" "${captureUrl}"`, { stdio: "inherit", timeout: 25000 });
      if (fs.existsSync(dest)) {
        const sz = fs.statSync(dest).size;
        console.log(`[SAVED] ${project.id}.png (${(sz / 1024).toFixed(1)} KB)`);
      }
    } catch (err) {
      console.warn(`[WARN] Failed to fetch for ${project.id}:`, err.message);
    }
  }

  console.log("All real-time screenshots processed successfully!");
}

run();
