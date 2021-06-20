const statusMonitor = require('express-status-monitor')
module.exports = {
    server_metrics: function(app){
        app.use(statusMonitor())
    }
}

const configuration = {
    healthChecks: [
        {
          protocol: 'http',
          host: 'localhost', //modifu for prod
          port: 4040,
          path: '/health/ex1',
          headers: {},
        },
        {
          protocol: 'http',
          host: 'localhost', //modifu for prod
          port: 4040,
          path: '/status/200',
          headers: {},
        },
      ],
}
