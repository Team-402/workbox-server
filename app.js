/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

// require core modules
const path = require('path');

// require thirdpart modules
const Koa = require('koa');
const staticCache = require('koa-static-cache');
const favicon = require('koa-favicon');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');

// require custom modules
const hbs = require('./lib/common/hbs');
const logger = require('./lib/common/logger');

var app = new Koa();
var log = logger.getLogger(__filename);

var staticPath = path.join(__dirname, 'public');
var viewPath = path.join(__dirname, 'views');

// global middlewares
app.use(favicon(path.join(staticPath, 'favicon.ico')));
app.use(staticCache(staticPath, {
    maxAge: 365 * 24 * 60 * 60
}));
app.use(logger.getConnect());
app.use(hbs.middleware({
    viewPath: viewPath,
    partialsPath: path.join(viewPath, 'partials'),
    defaultLayout: 'layout',
    layoutsPath: viewPath
}));
app.use(json());
app.use(bodyparser());

// mount root routes
var router = require('./lib/routes').router;
app.use(router.routes());

// error
app.on('error', function(err, ctx){
    log.error('server error.\n', err.stack, '\ncontext: ', JSON.stringify(ctx));
});

module.exports.app = app;
