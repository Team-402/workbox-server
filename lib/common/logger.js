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
var DEFAULT = "%s -- %s %s HTTP/%s, %s %s";

// log file dir
var dir;
if (config.has('log.dir')) {
    dir = config.get('log.dir')
} else {
    dir = path.join(root, 'logs');
}

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

module.exports.getConnect = function () {
    return function* (next) {
        var req = this.request, header = req.header, nodeReq = this.req;
        var str = util.format(DEFAULT, req.ip, req.method, req.url, nodeReq.httpVersion, req.length || null, header['user-agent']);
        log4js.getLogger('http').debug(str);
        yield next;
    };
};
