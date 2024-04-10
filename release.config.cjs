/** @type { import("@semantic-release/release-config").ReleaseConfig } */
module.exports = {
    branches: ["main"],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "brianrodri/semantic-release-obsidian-plugin",
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "package-lock.json", "manifest.json", "versions.json"],
                message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
        [
            "@semantic-release/github",
            {
                assets: ["package.json", "package-lock.json", "manifest.json", "versions.json"],
            },
        ],
    ],
};
