const { build } = require("esbuild");
const replace = require("replace-in-file");

build({
  entryPoints: ["./src/bar.js"],
  outdir: "./dist",
  minify: false,
  bundle: true,
})
  .catch(() => process.exit(1))
  .finally(() => {
    replace.sync({
      files: "./dist/bar.js",
      from: [/\(\(\) => {/g, /}\)\(\);/g],
      to: "",
      countMatches: true,
    });
    replace.sync({
      files: "./dist/bar.js",
      from: ["async function handle"],
      to: "export async function handle",
      countMatches: true,
    });
  });