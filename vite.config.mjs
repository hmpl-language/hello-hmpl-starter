import { defineConfig } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import hmplPlugin from "vite-plugin-hmpl";

export default defineConfig(({ command }) => ({
  plugins: [
    hmplPlugin(),
    viteMockServe({
      mockPath: "mock",
      enable: command === "serve",
      logger: true,
    }),
  ],
}));
