/**
 * Created by Corey600 on 2016/3/28.
 *
 * routes
 *
 */

'use strict';

const router = require('koa-router')();

//////////
// rest api
//////////

const user = require('./api/user');
router.use('/api', user.routes(), user.allowedMethods());


//////////
// web page
//////////

const web = require('./web');
router.use(web.routes(), web.allowedMethods());


module.exports = router;
