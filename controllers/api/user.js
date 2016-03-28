/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const logger = require('../../common/logger');

exports.add = function* () {
    logger.debug('this is rest api.');
    return this.body = 'success';
};
