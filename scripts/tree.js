const fs = require("fs");
const path = require("path");

const ignore = new Set([
  "node_modules",
  ".git",
  "dist",
  ".vscode",
  "coverage",
]);

function tree(dir, prefix = "") {
  const items = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((item) => !ignore.has(item.name));

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;

    console.log(
      prefix + (isLast ? "└── " : "├── ") + item.name
    );

    if (item.isDirectory()) {
      tree(
        path.join(dir, item.name),
        prefix + (isLast ? "    " : "│   ")
      );
    }
  });
}

console.log(path.basename(process.cwd()));
tree(process.cwd());