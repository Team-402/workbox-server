/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const path = require('path');
const util = require('util');
const log4js = require('log4js');
const config = require('config');

var root = path.dirname(__dirname);
root = path.dirname(root);

// addr, method, url, HTTP/version, content-length, user-agent
var REQ_FORMAT = '%s - %s %s';
var INFO_FORMAT = 'HTTP/%s, %s %s';

// log files directory
var dir;
if (config.has('log.dir')) {
    dir = config.get('log.dir')
} else {
    dir = path.join(root, 'logs');
}

// configure log
log4js.configure({
    appenders: [
        {
            type: 'console'
        },
        {
            type: 'dateFile',
            filename: path.join(dir, 'normal.log'),
            pattern: '-yyyy-MM-dd',
            alwaysIncludePattern: false,
            category: '[all]'
        }
    ],
    levels: {
        '[all]': config.get('log.level')
    },
    replaceConsole: true
});

module.exports.getLogger = function (category) {
    return log4js.getLogger(category);
};

var httpLog = log4js.getLogger('http');
module.exports.getConnect = function () {
    return function* (next) {
        var request = this.request;
        var header = request.header;
        var req = this.req;
        var reqStr = util.format(REQ_FORMAT, request.ip, request.method, request.url);
        var str = util.format(INFO_FORMAT, req.httpVersion, request.length || 0, header['user-agent']);
        httpLog.debug(reqStr + ' ' + str);
        yield* next;
    };
};
