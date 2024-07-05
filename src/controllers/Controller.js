/**
 * The Controller class provides methods to interact with the entity service.
 * @class
 */
class Controller {
    /**
     * Creates a new Controller instance.
     * @param {object} entityService - The service to interact with the entity.
     */
    constructor(entityService) {
        this.entityService = entityService;
    }

    /**
     * Retrieves all records from the entity service and sends them as a JSON response.
     * @async
     * @param {object} req - The HTTP request object.
     * @param {object} res - The HTTP response object.
     * @returns {Promise<object>} The HTTP response.
     */
    async getAll(req, res) {
        try {

            const recordsList = await this.entityService.getAllRecords();
            return res.status(200).json(recordsList);

        } catch (error) {

            return res.status(40).json(error);
        }
    }
}

module.exports = Controller;