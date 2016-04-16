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
    UserInfo: load('user_info'),
    CityInfo: load('city_info'),
    JobInfo: load('job_info'),
    StatusInfo: load('status_info'),
    LabelInfo: load('label_info'),
    LabelBelong: load('label_belong'),
    TopLabel: load('top_label'),
    AdImage: load('ad_image')
};

sequelize.sync({ force: true });
