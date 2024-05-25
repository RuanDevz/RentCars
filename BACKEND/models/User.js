module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = function(models) {
        User.hasMany(models.Car, {
            foreignKey: 'userId',
            as: 'cars'
        });
    };

    return User;
};