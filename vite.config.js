import { viteMockServe } from "vite-plugin-mock";
import hmplPlugin from "./vite-plugin-hmpl";

export default ({ command }) => {
	return {
		plugins: [
			hmplPlugin(),
			viteMockServe({
				mockPath: "mock",
				enable: command === "serve",
				logger: true,
			}),
		],
	};
};
