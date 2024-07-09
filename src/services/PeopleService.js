const Services = require('./Services.js');

class PeopleService extends Services {
    constructor() {
        super('People');
    }
}

module.exports = PeopleService;
