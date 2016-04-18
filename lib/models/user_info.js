/**
 * Created by Corey600 on 16/4/11.
 */

/* jshint indent: 2 */

const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user_info', {
        // 用户ID(主键)
        userId: {
            field: 'user_id',
            type: DataTypes.STRING,
            defaultValue: Sequelize.UUID,
            allowNull: false,
            primaryKey: true
        },
        // 用户名
        userName: {
            field: 'user_name',
            type: DataTypes.STRING,
            allowNull: false
        },
        // 手机号
        phone: {
            field: 'phone',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 邮箱
        email: {
            field: 'email',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 密码
        password: {
            field: 'password',
            type: DataTypes.STRING,
            allowNull: false
        },
        // 用户头像URL
        head_url: {
            field: 'head_url',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 性别 male/female
        sex: {
            field: 'sex',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 年龄
        age: {
            field: 'age',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 城市代码
        cityCode: {
            field: 'city_code',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 公司
        company: {
            field: 'company',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 职业
        job: {
            field: 'job',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 工作信息表ID
        work_id: {
            field: 'work_id',
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        // 上次登陆时间
        lastLoginTime: {
            field: 'last_login_time',
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
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
        tableName: 'user_info',
        freezeTableName: true
    });
};
