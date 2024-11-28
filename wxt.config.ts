import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: "src",
    extensionApi: "chrome",
    modules: ["@wxt-dev/module-svelte"],
    manifest: {
        web_accessible_resources: [
            {
                matches: ["<all_urls>"],
                resources: ["skibidi-toilet.gif", "skibidi.mp3", "tele.gif"],
            },
        ],
    },
});
