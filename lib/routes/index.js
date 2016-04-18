/**
 * Created by Corey600 on 2016/3/28.
 *
 * routes
 *
 */

'use strict';

const log = require('../common/logger').getLogger(__filename);

const router = new (require('koa-router'))();

//////////
// rest api
//////////

const user = require('./api/user');
router.use('/api', user.routes(), user.allowedMethods());


//////////
// web page
//////////

const web = require('./web');

router.use(function* (next){
    try{
        var ff = gg;
        return yield* next;
    }catch(err){
        log.error('route error: ', err.stack);
        return this.body = err.stack;
    }
});
router.use(web.routes(), web.allowedMethods());

module.exports.router = router;
