#!/usr/bin/env node

const { spawnSync } = require("child_process");

const name = process.argv[2];
if (!name) {
  console.error("❌ Please provide a migration name");
  process.exit(1);
}

const migrationPath = `src/database/migrations/${name}`;

const args = [
  "-r",
  "tsconfig-paths/register",
  "./node_modules/typeorm/cli.js",
  "migration:generate",
  migrationPath,
  "-d",
  "src/configs/datasource.ts",
];

const result = spawnSync("ts-node", args, { stdio: "inherit" });
process.exit(result.status);
