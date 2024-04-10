module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "bodybuilding",
        {
            bodybuildingID: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            day: {
                type: DataTypes.STRING,
                // allowNull: false,
            },
            exercise: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sets: {
                type: DataTypes.STRING(60),
                // allowNull: false,
            },
            reps: {
                type: DataTypes.STRING(60),
                // allowNull: false,
            },
            intensity: {
                type: DataTypes.STRING,
                // allowNull: false,
            },
            rir: {
                type: DataTypes.STRING,
                // allowNull: false,
            },
        },
        {
            timestamps: false,
        },
        {
            tableName: "bodybuilding",
        }
    );
};