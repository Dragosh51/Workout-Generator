const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/:tableName', (req, res) => {
    const { tableName } = req.params;
    db[tableName].findAll()
        .then((workouts) => {
            res.status(200).json(workouts);
        })
        .catch((err) => {
            console.error(`Error fetching ${tableName} workouts:`, err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

module.exports = router;