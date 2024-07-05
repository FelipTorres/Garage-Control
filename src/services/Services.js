const dataSource = require('../models');

/**
 * The Services class provides methods to interact with the data source.
 * @class
 */
class Services {
    /**
     * Creates a new Services instance.
     * @param {string} modelName - The name of the model to interact with.
     */
    constructor(modelName) {
        this.model = modelName;
    }

    /**
     * Retrieves all records from the data source for the specified model.
     * @async
     * @returns {Promise<Array<object>>} The list of all records.
     */
    async getAllRecords () {
        console.log(this.model);
        return dataSource[this.model].findAll();
    }
}

module.exports = Services;