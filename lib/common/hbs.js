/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const hbs = require('koa-hbs');

/**
 * 注册helper: convert
 */
hbs.registerHelper('convert', function (v, c) {
    return (c && c[v]) || (this.convert && this.convert[v]) || v;
});

module.exports = hbs;
