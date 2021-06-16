module.exports = {
    Response: function(callback){
        return {
            status: function(status){
                return {
                    json: function(body){
                        callback(status, body)
                    }
                }
            }
        }
    },
}