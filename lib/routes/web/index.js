/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const router = new (require('koa-router'))();
const web = require('../../controllers/web');

router.get('/', web.index);

module.exports = router;
