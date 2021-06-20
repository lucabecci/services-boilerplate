const { Router } = require("express");
const IndexController = require("../controllers/IndexController");

module.exports = {
    init: function () {
        const router = Router();
        configuration(router);
        return router;
    },
};

function configuration(router) {
    router.get("/", IndexController.index);
}
