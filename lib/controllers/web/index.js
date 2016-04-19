/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const log = require('../../common/logger').getLogger(__filename);

/**
 * 渲染主页
 * @returns {*}
 */
exports.index = function* () {
    log.debug('this is index page.');
    return yield this.render('index', {
        title: 'Hello World Koa!'
    });
};
