const { Router } = require('express');
const router = Router();

const PeopleController = require('../controllers/PeopleController.js');
const peopleController = new PeopleController();

router.get('/people', (
    req,
    res
) => peopleController.getAll(req, res));

router.get('/people/:id', (
    req,
    res
) => peopleController.getById(req, res));

router.post('/people', (
    req,
    res
) => peopleController.createNew(req, res));

router.put('/people/:id', (
    req,
    res
) => peopleController.update(req, res));

router.delete('/people/:id', (
    req,
    res
) => peopleController.delete(req, res));

module.exports = router;
