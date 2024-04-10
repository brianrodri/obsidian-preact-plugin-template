/** @type { import("@semantic-release/release-config").ReleaseConfig } */
module.exports = {
    branches: ["main"],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "brianrodri/semantic-release-obsidian-plugin",
        "@semantic-release/github",
    ],
};
