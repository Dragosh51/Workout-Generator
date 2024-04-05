module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "checkout",
        {
            checkoutID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            productID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false,
                comment: "null",
            },
            userID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        },
        {
            tableName: "checkout",
        }
    );
};