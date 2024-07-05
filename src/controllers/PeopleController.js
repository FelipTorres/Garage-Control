const Controller = require('./Controller.js');
const PeopleService = require('../services/PeopleService.js');

const peopleService = new PeopleService();

class PeopleController extends Controller {
    constructor() {
        super(peopleService);
    }
}

module.exports = PeopleController
