/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const router = new (require('koa-router'))();
const user = require('../../controllers/api/user');

router.post('/user/add', user.add);

module.exports = router;
