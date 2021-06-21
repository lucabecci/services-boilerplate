const fs = require("fs");
const moment = require("moment");

const ErrorLogger = {
    Insert: function (type, error) {
        let data = `---\n# ${moment().format()}\n## ${type}\n> ${error}\n---\n`;
        const name = moment().format("MMM Do YY").replace(/\s/g, "");
        try {
            fs.readFileSync(`./logs/${name}.md`);
            fs.appendFileSync(`./logs/${name}.md`, data, (err) => {
                if (err) throw err;
            });
        } catch (e) {
            fs.writeFileSync(`./logs/${name}.md`, data, (err) => {
                if (err) throw err;
            });
        }
    },
};

module.exports = {
    ErrorLogger,
};
