/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

var path = require('path');
var staticCache = require('koa-static-cache');
var favicon = require('koa-favicon');
var json = require('koa-json');
var bodyparser = require('koa-bodyparser');

var app = new (require('koa'))();
var koa = new (require('koa-router'))();

var hbs = require('./lib/common/hbs');
var logger = require('./lib/common/logger');
var log = logger.getLogger(__filename);

// global middlewares
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(staticCache(path.join(__dirname, 'public'), {
    maxAge: 365 * 24 * 60 * 60
}));
app.use(json());
app.use(bodyparser());
app.use(hbs.middleware({
    viewPath: path.join(__dirname, 'views'),
    partialsPath: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'layout',
    layoutsPath: path.join(__dirname, 'views')
}));
//app.use(logger.getConnect());

// routes definition
var router = require('./lib/routes').router;
koa.use(function* (next){
    try{
        return yield* next;
    }catch(err){
        log.error('route eeror: ', err.stack);
        return this.body = err.stack;
    }
});
koa.use(router.routes(), router.allowedMethods());

// mount root routes
app.use(koa.routes());

app.on('error', function(err, ctx){
    log.error('server error: ', err, '\n context:\n', ctx);
});

module.exports.app = app;
