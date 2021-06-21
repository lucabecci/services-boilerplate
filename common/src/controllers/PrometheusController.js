const Prometheus = require("prom-client");
const HISTOGRAM_NAME = "http_request_duration_ms";
const HISTOGRAM_HELP = "Duration of HTTP request in ms";
const HISTOGRAM_LABEL_NAMES = ["method", "route", "code"];
const HISTOGRAM_BUCKETS = [0.1, 5, 15, 50, 100, 200, 300, 400, 500]; // buckets for response time from 0.1ms to 500ms
module.exports = {
    Client: Prometheus,
    metricsInterval: instanceMetricsInterval(),
    httpRequestDurationMicroseconds: instanceHttpDurationMetrics(),
};

function instanceMetricsInterval() {
    const metricsInterval = Prometheus.collectDefaultMetrics();
    return metricsInterval;
}

function instanceHttpDurationMetrics() {
    const httpRequestDurationMicroseconds = new Prometheus.Histogram({
        name: HISTOGRAM_NAME,
        help: HISTOGRAM_HELP,
        labelNames: HISTOGRAM_LABEL_NAMES,
        buckets: HISTOGRAM_BUCKETS,
    });
    return httpRequestDurationMicroseconds;
}
