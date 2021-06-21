const { ErrorLogger } = require("../../common/src/utils/LoggerUtil");

describe("LoggerUtil", () => {
    it("LoggerUtil.ErrorLogger - Insert", function (done) {
        this.timeout(9999);
        ErrorLogger.Insert("test", "this is a error for my tdd");
    });
});
