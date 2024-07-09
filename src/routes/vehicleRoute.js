const { Router } = require('express');
const router = Router();

const VehicleController = require('../controllers/VehicleController.js');
const vehicleController = new VehicleController();

router.get('/vehicle', (
    req,
    res
) => vehicleController.getAll(req, res));

router.get('/vehicle/:id', (
    req,
    res
) => vehicleController.getById(req, res));

router.post('/vehicle', (
    req,
    res
) => vehicleController.createNew(req, res));

router.put('/vehicle/:id', (
    req,
    res
) => vehicleController.update(req, res));

router.delete('/vehicle/:id', (
    req,
    res
) => vehicleController.delete(req, res));

module.exports = router;
