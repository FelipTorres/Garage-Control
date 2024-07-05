'use strict';
const {
  Model
} = require('sequelize');

/**
 * This module exports a function that defines and returns a Sequelize model for the Vehicle table.
 * @module src/models/vehicle
 * @param {object} sequelize - The Sequelize instance.
 * @param {object} DataTypes - The Sequelize data types.
 * @returns {object} The Vehicle model.
 */
module.exports = (sequelize, DataTypes) => {
  /**
   * The Vehicle class represents a Sequelize model for the Vehicle table.
   * @class
   * @extends Model
   */
  class Vehicle extends Model {
    /**
     * Defines associations between models.
     * @static
     * @param {object} models - The models to associate with.
     */
    static associate(models) {
      // define association here
    }
  }

  /**
   * Initializes the Vehicle model.
   * @param {object} attributes - The model attributes.
   * @param {object} options - The model options.
   */
  Vehicle.init({
    model: DataTypes.STRING,
    brand: DataTypes.STRING,
    plate: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehicle',
    tableName: 'vehicle'
  });

  return Vehicle;
};