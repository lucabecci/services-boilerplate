const axios = require("axios");
const express = require("express");
const { assert } = require("chai");
const MetricsService = require("../../common/src/services/MetricsService");
const ServerServices = require("../../common/src/services/ServerServices");

describe("MetricsService", () => {
    let app = null;
    let server = null;
    before(function (done) {
        app = express();
        require("dotenv").config();
        ServerServices.middleware(app, express.json());
        ServerServices.middleware(app, express.urlencoded({ extended: false }));
        server = app.listen(4040);
        done();
    });
    it("MetricsService.server_metrics - correct", async function () {
        this.timeout(20000);
        MetricsService.server_metrics(app);
        body = {
            usr: "easy_key",
            pwd: "easy_key",
        };
        const response = await axios.post("http://localhost:4040/status", body);
        assert.deepEqual(
            !response.data.message ? true : false,
            true,
            "No se recibe lo esperado"
        );
    });
    it("MetricsService.server_metrics - bad_credentials", async function () {
        this.timeout(20000);
        MetricsService.server_metrics(app);
        body = {
            usr: "easy_key2",
            pwd: "easy_key2",
        };
        try {
            await axios.post("http://localhost:4040/status", body);
        } catch (e) {
            assert.deepEqual(
                e.response.data.message,
                "Invalid credentials",
                "No se protege de credenciales invalidas"
            );
        }
    });
    it("MetricsService.server_metrics - no_credentials", async function () {
        this.timeout(20000);
        MetricsService.server_metrics(app);
        body = {};
        try {
            await axios.post("http://localhost:4040/status", body);
        } catch (e) {
            assert.deepEqual(
                e.response.data.message,
                "Send credentials for the access",
                "No se contempla la falta de credenciales"
            );
        }
    });
    after(function (done) {
        server.close();
        done();
    });
});
