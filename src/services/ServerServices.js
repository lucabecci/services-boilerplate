module.exports = {
    endpoint: function(app, path, endpoint){
        app.use(path, endpoint)
    },
    middleware: function(app, middleware){
        app.use(middleware)
    }
}