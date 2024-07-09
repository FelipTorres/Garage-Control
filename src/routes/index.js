const express = require('express');
const people = require('./peopleRoute');
const vehicle = require('./vehicleRoute');

module.exports = app => {
    app.use(
        express.json(),
        people,
        vehicle
    );
};
