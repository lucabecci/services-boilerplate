module.exports = {
    server_metrics: function (app) {
        const statusMonitor = require("express-status-monitor")(configuration);
        app.use(statusMonitor);
        app.post(
            "/status",
            (req, res, next) => {
                if (!req.body || !req.body.usr || !req.body.pwd) {
                    return res
                        .status(401)
                        .json({ message: "Send credentials for the access" });
                }
                const usr = req.body.usr;
                const pwd = req.body.pwd;
                if (
                    usr === process.env.ADMIN_USR &&
                    pwd === process.env.ADMIN_PWD
                ) {
                    next();
                } else {
                    return res
                        .status(401)
                        .json({ message: "Invalid credentials" });
                }
            },
            statusMonitor.pageRoute
        );
    },
};

const configuration = {
    title: "Core Status",
    theme: "default.css",
    path: "",
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
