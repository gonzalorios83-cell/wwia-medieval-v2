import { cp } from "node:fs/promises";
import { resolve } from "node:path";
import type { Plugin } from "vite";

export function sites(): Plugin {
  return {
    name: "sites-artifact",
    apply: "build",
    async closeBundle() {
      await cp(
        resolve(".openai"),
        resolve("dist/.openai"),
        { recursive: true, force: true },
      );
    },
  };
}
