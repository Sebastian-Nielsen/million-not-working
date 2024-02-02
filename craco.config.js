const million = require("million/compiler");


module.exports = {

    webpack: {
        configure: {
            plugins: [
                // MillionJs  (https://million.dev/docs/install)
                million.webpack({
                    auto: true,
                })
            ],
        },
    },
};