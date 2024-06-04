module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define("Car", {
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nota: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reviews: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passageiros: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marcha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        arcondicionado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        portas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rented: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Car.associate = function(models) { 
        Car.belongsTo(models.User, {
            foreignKey: 'userId', 
            as: 'user'
        });
    };

    return Car;
};
