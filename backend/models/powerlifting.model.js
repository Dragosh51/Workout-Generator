module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "powerlifting",
        {
            day: {
                type: DataTypes.STRING,
                // allowNull: false,
                primaryKey: true,
            },
            exercise: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            setsAndReps: {
                type: DataTypes.STRING(60),
                // allowNull: false,
            },
            intensity: {
                type: DataTypes.STRING,
                // allowNull: false,
            },
        },
        {
            timestamps: false,
        },
        {
            tableName: "powerlifting",
        }
    );
};