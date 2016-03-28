/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const log4js = require('log4js');
const config = require('../config');

log4js.configure({
    "appenders": [
        {
            "type": "console"
        },
        {
            "type": "dateFile",
            "filename": "logs/normal.log",
            "pattern": "-yyyy-MM-dd",
            "alwaysIncludePattern": false
        }
    ],
    "levels": {
        "[all]": config.logLevel || (config.debug ? "DEBUG" : "INF")
    }
});

const logger = log4js.getLogger();
logger.info('logger loaded.');

module.exports = logger;
