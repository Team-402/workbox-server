/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const log = require('../../common/logger').getLogger(__filename);

const UserInfo = require('../../models').UserInfo;

exports.add = function* () {
    log.debug('this is rest api.');
    return this.body = 'success';
};
