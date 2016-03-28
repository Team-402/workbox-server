/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const router = require('koa-router')();
const logger = require('../../common/logger');

exports.index = function* () {
    logger.debug('this is index page.');
    return yield this.render('index', {
        title: 'Hello World Koa!'
    });
};

exports.user = function* () {
    logger.debug('this is user page.');
    return this.body = 'this a users response!';
};
