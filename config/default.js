/**
 * Created by Corey600 on 2016/3/28.
 *
 * default config.
 *
 */

'use strict';

const path = require('path');
const root = path.dirname(__dirname);

module.exports = {
    // app
    debug: true,
    server: {
        port: 3500
    },

    // mysql
    mysql: {
        database: 'test',
        host: '127.0.0.1',
        username: 'corey',
        password: 'corey',
        port: 13306
    },

    // log
    log: {
        dir: path.join(root, 'logs'),
        level: 'DEBUG'
    }
};
