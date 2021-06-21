module.exports = {
    HTTPErrorHandler: function (app) {
        app.use((err, req, res, next) => {
            res.statusCode = 500;
            res.json({ error: err.message });
            next();
        });
    },
};
