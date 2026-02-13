import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(process.cwd());
const demosRoot = path.join(repoRoot, "src", "demo-webistes");
const outRoot = path.join(repoRoot, "public", "demos");

/**
 * Each demo is a standalone Vite app nested like:
 * src/demo-webistes/<outer>/<inner>/package.json
 */
const demos = [
  {
    slug: "apex-academy",
    cwd: path.join(demosRoot, "apex-academy-suite-main", "apex-academy-suite-main"),
  },
  {
    slug: "auraspaces",
    cwd: path.join(demosRoot, "auraspaces-demo-studio-main", "auraspaces-demo-studio-main"),
  },
  {
    slug: "bright-future-academy",
    cwd: path.join(demosRoot, "bright-future-academy-demo-main", "bright-future-academy-demo-main"),
  },
  {
    slug: "healing-touch",
    cwd: path.join(demosRoot, "healing-touch-demo-main", "healing-touch-demo-main"),
  },
  {
    slug: "novacare",
    cwd: path.join(demosRoot, "novacare-demo-delight-main", "novacare-demo-delight-main"),
  },
  {
    slug: "royalwood",
    cwd: path.join(demosRoot, "royalwood-showcase-main", "royalwood-showcase-main"),
  },
  {
    slug: "sharma-associates",
    cwd: path.join(demosRoot, "sharma-associates-demo-main", "sharma-associates-demo-main"),
  },
  {
    slug: "titan-fitness",
    cwd: path.join(demosRoot, "titan-fitness-ignite-main", "titan-fitness-ignite-main"),
  },
  {
    slug: "urban-spice",
    cwd: path.join(demosRoot, "urban-spice-demo-main", "urban-spice-demo-main"),
  },
];

function run(cmd, args, cwd) {
  const result = spawnSync(cmd, args, {
    cwd,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    throw new Error(`Command failed: ${cmd} ${args.join(" ")}`);
  }
}

function installDependencies(cwd) {
  const ciResult = spawnSync("npm", ["ci"], {
    cwd,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (ciResult.status === 0) return;

  // Fallback for demos that don't ship a package-lock.json
  run("npm", ["install"], cwd);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.rmSync(dir, { recursive: true, force: true });
}

function copyDir(src, dest) {
  ensureDir(dest);
  fs.cpSync(src, dest, { recursive: true });
}

ensureDir(outRoot);

for (const demo of demos) {
  const pkgJson = path.join(demo.cwd, "package.json");
  if (!fs.existsSync(pkgJson)) {
    throw new Error(`Missing package.json for demo '${demo.slug}' at ${demo.cwd}`);
  }

  const nodeModules = path.join(demo.cwd, "node_modules");
  if (!fs.existsSync(nodeModules)) {
    installDependencies(demo.cwd);
  }

  // Build with a relative base so assets resolve correctly under /demos/<slug>/
  run("npm", ["run", "build", "--", "--base=./"], demo.cwd);

  const distDir = path.join(demo.cwd, "dist");
  if (!fs.existsSync(distDir)) {
    throw new Error(`Build output missing for demo '${demo.slug}' (expected dist/)`);
  }

  const destDir = path.join(outRoot, demo.slug);
  emptyDir(destDir);
  copyDir(distDir, destDir);
}

console.log(`\n✅ Built ${demos.length} demo websites into ${path.relative(repoRoot, outRoot)}\n`);
