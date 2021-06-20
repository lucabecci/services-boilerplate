const statusMonitor = require("express-status-monitor");
module.exports = {
    server_metrics: function (app) {
        app.use(statusMonitor(configuration));
    },
};

const configuration = {
    title: "Core Status",
    theme: "default.css", 
    path: "/status",
    spans: [
        {
            interval: 1, // Every second
            retention: 60, // Keep 60 datapoints in memory
        },
        {
            interval: 5, // Every 5 seconds
            retention: 60,
        },
        {
            interval: 15, // Every 15 seconds
            retention: 60,
        },
    ],
    chartVisibility: {
        cpu: true,
        mem: true,
        load: true,
        eventLoop: false,
        heap: false,
        responseTime: true,
        rps: true,
        statusCodes: true,
    },
    healthChecks: [],
    ignoreStartsWith: "/admin",
};
