const server = require("./server");
const colors = require("colors");
module.exports = {
    start: function () {
        server.run();
    },
    finish: function () {
        console.log(colors.red("Waiting for close the server..."));
        server.close();
        process.exit(0);
    },
};
