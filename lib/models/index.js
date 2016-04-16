/**
 * Created by fcx on 16/4/11.
 */

'use strict';

const path = require('path');
const sequelize = require('../common/sequelize');

function load(name){
    return sequelize.import(path.join(__dirname, name));
}

module.exports = {
    sequelize: sequelize,
    UserInfo: load('user_info')
};

sequelize.sync({ force: true });
