//jshint esversion:8

module.exports = (sequelize, DataTypes) => { // a function which creates an object describing how records should be saved in the db
    const Pie = sequelize.define('pie', {
        nameOfPie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        baseOfPie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        crust: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timeToBake: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        servings: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Pie;
};
