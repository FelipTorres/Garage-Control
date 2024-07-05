const express = require('express');
const people = require('./peopleRoute');

module.exports = app => {
    app.use(
        express.json(),
        people,
    );
};
