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

        return dataSource[this.model].findAll();
    }

    /**
     * @param id
     * @returns {Promise<Model|null>}
     */
    async getRecordById(id) {

        return dataSource[this.model].findByPk(id);
    }

    /**
     * @param newRecord
     * @returns {Promise<newRecord>}
     */
    async createRecord(newRecord) {

        return dataSource[this.model].create(newRecord);
    }

    /**
     * @param id
     * @param updatedRecord
     * @returns {Promise<*>}
     */
    async updateRecord(id, updatedRecord) {

        return dataSource[this.model].update(updatedRecord, {
            where: {
                id: id
            }
        });
    }

    /**
     * @param id
     * @returns {Promise<*>}
     */
    async deleteRecord(id) {

        return dataSource[this.model].destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = Services;