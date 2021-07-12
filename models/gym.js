const { Model } = require('sequelize')

//
//Gym belongs to User and Gyms can have many comments. Gyms can also have many Users ?
//

module.exports = (sequelize, DataTypes) => {
  class Gym extends Model {
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
      // user_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'users',
      //     key: 'id'
      //   }
      // },
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
