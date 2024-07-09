const Controller = require('./Controller.js');
const VehicleService = require('../services/VehicleService.js');

const vehicleService = new VehicleService();

class VehicleController extends Controller {
    constructor() {
        super(vehicleService);
    }
}

module.exports = VehicleController;
