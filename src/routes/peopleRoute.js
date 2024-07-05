const { Router } = require('express');
const router = Router();

const PeopleController = require('../controllers/PeopleController.js');
const peopleController = new PeopleController();

router.get('/people', (
    req,
    res
) => peopleController.getAll(req, res));

module.exports = router;
