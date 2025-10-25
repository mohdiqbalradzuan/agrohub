const CracoAlias = require("craco-alias");

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "jsconfig",
                baseUrl: "./src",
                aliases: {
                    "@": "./src",
                    "@bg_effect": "./src/bg_effect",
                    "@data": "./src/data",
                    "@components": "./src/components",
                    "@utils": "./src/utils",
                    "@images": "./src/images",
                },
            },
        },
    ],
};
