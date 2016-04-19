/**
 * Created by Corey600 on 2016/3/28.
 *
 * routes
 *
 */

'use strict';

const log = require('../common/logger').getLogger(__filename);

const rootRouter = new (require('koa-router'))();
const apiRouter = new (require('koa-router'))();
const webRouter = new (require('koa-router'))();

//////////
// rest api
//////////

/**
 * 接口错误处理
 */
apiRouter.use(function* (next){
    log.debug('api error dear.');
    try{
        return yield* next;
    }catch(err){
        log.error('route api error.\n', err.stack);
        this.status = 500;
        return this.body = err.stack;
    }
});

const user = require('./api/user');
apiRouter.use('/user', user.routes(), user.allowedMethods());


//////////
// web page
//////////

/**
 * 页面错误处理
 */
webRouter.use(function* (next){
    log.debug('web error dear.');
    try{
        return yield* next;
    }catch(err){
        log.error('route web error.\n', err.stack);
        return yield this.render('error', {
            message: 'Server Error!',
            error: err
        });
    }
});

const index = require('./web');
webRouter.use(index.routes(), index.allowedMethods());


//////////
// root
//////////

/**
 * 挂载到根路由
 */
rootRouter.use('/api', apiRouter.routes(), apiRouter.allowedMethods());
rootRouter.use(webRouter.routes(), webRouter.allowedMethods());


module.exports.router = rootRouter;
