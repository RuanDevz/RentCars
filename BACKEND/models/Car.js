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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reviews: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        passageiros: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Car;
};
