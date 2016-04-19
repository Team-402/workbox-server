/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const log = require('../../common/logger').getLogger(__filename);

const UserInfo = require('../../models').UserInfo;

/**
 * 添加用户
 * @returns {string}
 */
exports.get = function* () {
    //var ff = gg;
    log.debug('this is rest api.');
    return this.body = 'success';
};
