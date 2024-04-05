module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "user",
        {
            userID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(60),
                allowNull: false,
                comment: "null",
            },
            email: {
                type: DataTypes.STRING(60),
                allowNull: false,
                comment: "null",
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
                comment: "null",
            },
        },
        {
            timestamps: false,
        },
        {
            tableName: "users",
        }
    );
};