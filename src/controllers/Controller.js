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

            return res.status(400).json(error);
        }
    }

    /**
     * Get a record by id from the entity service and sends it as a JSON response.
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async getById(req, res) {
        try {

            const { id } = req.params;
            const people = await this.entityService.getRecordById(id);
            return res.status(200).json(people);

        } catch (error) {

            return res.status(400).json(error);
        }
    }

    /**
     * Create a new record in the entity service and sends it as a JSON response.
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async createNew(req, res) {
        try {

            const newPeople = req.body;
            const createdPeople = await this.entityService.createRecord(newPeople);
            return res.status(201).json(createdPeople);

        } catch (error) {

            return res.status(400).json(error);
        }
    }

    /**
     * Update a record in the entity service and sends a response.
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async update(req, res) {
        try {

            const { id } = req.params;
            const updatedPeople = req.body;
            await this.entityService.updateRecord(id, updatedPeople);
            return res.status(204).end();

        } catch (error) {

            return res.status(400).json(error);
        }
    }

    /**
     * Delete a record in the entity service and sends a response.
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async delete(req, res) {
        try {

            const { id } = req.params;
            await this.entityService.deleteRecord(id);
            return res.status(204).end();

        } catch (error) {

            return res.status(400).json(error);
        }
    }
}

module.exports = Controller;