/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const log = require('../../common/logger').getLogger(__filename);

exports.index = function* () {
    log.debug('this is index page.');
    return yield this.render('index', {
        title: 'Hello World Koa!'
    });
};

exports.user = function* () {
    log.debug('this is user page.');
    return this.body = 'this a users response!';
};
