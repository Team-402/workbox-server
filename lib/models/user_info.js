/**
 * Created by fcx on 16/4/11.
 */

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user_info', {
        id: {
            //field: 'id',
            type: DataTypes.STRING,
            //allowNull: true,
            //defaultValue: 'nihao',
            primaryKey: true,
            //references: {
            //    model: '',
            //    key: ''
            //}
        }
    });
};
