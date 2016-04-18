/**
 * Created by Corey600 on 16/4/16.
 */

/* jshint indent: 2 */

const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('city_info', {
        // ID(主键)
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // 城市代码
        code: {
            field: 'code',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 城市名称
        name: {
            field: 'name',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 省份
        province: {
            field: 'province',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 国家
        country: {
            field: 'country',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 经度
        longitude: {
            field: 'longitude',
            type: DataTypes.DECIMAL,
            defaultValue: null,
            allowNull: true,
            validate: { min: -90, max: 90 }
        },
        // 纬度
        latitude: {
            field: 'latitude',
            type: DataTypes.DECIMAL,
            defaultValue: null,
            allowNull: true,
            validate: { min: -180, max: 180 }
        },
        // 创建时间
        addTime: {
            field: 'add_time',
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        // 更新时间
        updateTime: {
            field: 'update_time',
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        }
    }, {
        tableName: 'city_info',
        freezeTableName: true
    });
};
