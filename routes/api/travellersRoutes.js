const router = require('express').Router();
const { location, traveller, trips } = require('../../models');

router.get('/', async (req, res) => {
    try {
        // Get request here
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        // Get by id request here
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        // Post request here
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        // Delete by id request here
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;