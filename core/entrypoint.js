const colors = require("colors");
const main = require("./main");
require("dotenv").config();
function entrypoint() {
    console.log(
        colors.green("RUNNING CORE SERVER IN MODE ==> "),
        colors.cyan(process.env.NODE_ENV.toUpperCase())
    );
    main.start();

    process.on("SIGINT", function () {
        main.finish();
        console.log(colors.red("CORE FINISH PROCESS AND CLOSING..."));
    });
}

entrypoint();
