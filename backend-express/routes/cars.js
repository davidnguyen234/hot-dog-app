const express = require('express');
const router = express.Router();

const cars = require('../data/cars.json');

router.get('/', (req, res, next) => {
    res.json(cars);
});

router.get('/:id', (req, res, next) => {

    const found = cars.some(car => car.id === parseInt(req.params.id));

    if (found) {
        res.json(cars.filter(car => car.id === parseInt(req.params.id)));
    } else {
        res.status(200).json("{}");
    }


});


module.exports = router;