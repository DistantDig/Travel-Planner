const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const travellersRoutes = require('./travellersRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/locationRoutes', locationRoutes);
router.use('/travellersRoutes', travellersRoutes);
router.use('/tripsRoutes', tripsRoutes);

module.exports = router;