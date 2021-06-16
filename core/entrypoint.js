const colors = require("colors/safe");
require("dotenv").config();
function entrypoint() {
    console.log(
        `${colors.bgMagenta(
            colors.black(process.env.NAME)
        )} started ${colors.green("succesfully")}`
    );
    process.on("SIGINT", function () {
        console.log(colors.bgBlack("Waiting for close the server..."));
        process.exit(0);
    });
}

entrypoint();
