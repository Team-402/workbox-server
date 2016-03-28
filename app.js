/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const path = require('path');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const favicon = require('koa-favicon');
const staticCache = require('koa-static-cache');
const logConnect = require('koa-log4js');

const app = require('koa')();
const koa = require('koa-router')();

const hbs = require('./common/hbs');
const logger = require('./common/logger');
logger.info('app start!');

// global middlewares
app.use(json());
app.use(logConnect());
app.use(staticCache(path.join(__dirname, 'public')), {
    maxAge: 365 * 24 * 60 * 60
});
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(bodyparser());
app.use(hbs.middleware({
    viewPath: path.join(__dirname, 'views'),
    partialsPath: path.join(__dirname, 'views', 'partials'),
    defaultLayout: "layout",
    layoutsPath: path.join(__dirname, 'views')
}));

// routes definition
const router = require('./routes');
koa.use(router.routes(), router.allowedMethods());

// mount root routes  
app.use(koa.routes());

app.on('error', function(err, ctx){
    logger.error('server error: ', err, ', context:\n', ctx);
});

module.exports = app;
