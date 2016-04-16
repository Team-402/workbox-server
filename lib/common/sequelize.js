/**
 * Created by fcx on 16/4/11.
 */

'use strict';

const log = require('./logger').getLogger(__filename);

const Sequelize = require('sequelize');
const config = require('config');

// 配置默认支持事务
const cls = require('continuation-local-storage');
Sequelize.cls = cls.createNamespace('koa-sequelize-transaction-namespace');

const database = config.get('mysql.database');
const username = config.get('mysql.username');
const password = config.get('mysql.password');
const host = config.get('mysql.host');
const port = config.get('mysql.port');

const sequelize = new Sequelize(database, username, password, {
    dialect: 'mysql',
    host: host,
    port: port,
    pool: {
        maxConnections: 5
    },
    define: {
        timestamps: false,   // 默认不启用时间戳设定
        underscored: true    // 将驼峰命名转为下划线命名
    },
    timezone: '+08:00',      // 时区设置
    logging: log.debug,
    isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED
});

module.exports = sequelize;
