const express = require("express");
const colors = require("colors");
const IndexRouter = require("../src/routers/IndexRouter");
const HTTPService = require("../src/services/HTTPService");
// const MetricsService = require("../src/services/MetricsService")
const ServerServices = require("../src/services/ServerServices");
const MetricsService = require("../src/services/MetricsService");

const CORE_PORT = process.env.PORT || 4040;

module.exports = {
    server: init(),
    run: function () {
        module.exports.server = module.exports.server.listen(
            CORE_PORT,
            function () {
                console.log("Core server on port:", CORE_PORT);
            }
        );
    },
    close: function () {
        module.exports.server.close();
        console.log(colors.red("Core server closed"));
    },
};

function init() {
    const app = express();
    MetricsService.server_metrics(app);
    HTTPService.HTTPErrorHandler(app);
    ServerServices.middleware(app, express.json({limit: '50mb'}))
    ServerServices.middleware(app, express.urlencoded({extended: false}))
    ServerServices.endpoint(app, "/", IndexRouter.init());
    return app;
}
