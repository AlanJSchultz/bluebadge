//jshint esversion:8

module.exports = (sequelize, DataTypes) => {  // a function which creates an object describing how records should be saved in the db
    const User = sequelize.define ('user', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
};
