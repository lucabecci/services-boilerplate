const PrometheusController = require("./PrometheusController");

module.exports = {
    init_metrics: function (app) {
        app.get('/metrics', (req, res) => {
            res.set('Content-type', PrometheusController.Client.register.contentType)
            res.end(PrometheusController.Client.register.metrics())
        })
    },
    initial_middleware: function (app) {
        app.use((req, res, next) => {
            res.locals.startEpoch = Date.now();
            next();
        });
    },
    final_middleware: function (app) {
        app.use((req, res, next) => {
            const responseTimeInMs = Date.now() - res.locals.startEpoch;
            PrometheusController.httpRequestDurationMicroseconds
                .labels(req.method, req.route.path, res.statusCode)
                .observe(responseTimeInMs);
            next();
        });
    },
};
