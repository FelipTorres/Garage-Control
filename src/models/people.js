'use strict';
const {
  Model
} = require('sequelize');

/**
 * This module exports a function that defines and returns a Sequelize model for the People table.
 * @module src/models/people
 * @param {object} sequelize - The Sequelize instance.
 * @param {object} DataTypes - The Sequelize data types.
 * @returns {object} The People model.
 */
module.exports = (sequelize, DataTypes) => {
  /**
   * The People class represents a Sequelize model for the People table.
   * @class
   * @extends Model
   */
  class People extends Model {
    /**
     * Defines associations between models.
     * @static
     * @param {object} models - The models to associate with.
     */
    static associate(models) {

      People.hasMany(models.Vehicle, {
        foreignKey: 'people_id',
      });
    }
  }

  /**
   * Initializes the People model.
   * @param {object} attributes - The model attributes.
   * @param {object} options - The model options.
   */
  People.init({
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
    tableName: 'people'
  });

  return People;
};