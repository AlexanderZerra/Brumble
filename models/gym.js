'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Gym extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gym.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Gym.hasMany(models.Comment, {
        foreignKey: 'gym_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Gym.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      location: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      spotter: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Gym',
      tableName: 'gyms'
    }
  )
  return Gym
}
