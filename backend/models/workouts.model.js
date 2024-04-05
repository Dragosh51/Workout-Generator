module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "workouts",
        {
            type: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            exercise: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            setsAndReps: {
                type: DataTypes.STRING(60),
                allowNull: false,
                comment: "null",
            },
            intensity: {
                type: DataTypes.FLOAT(7),
                allowNull: false,
                primaryKey: true,
                comment: "null",
            },
        },
        {
            timestamps: false,
        },
        {
            tableName: "workouts",
        }
    );
};