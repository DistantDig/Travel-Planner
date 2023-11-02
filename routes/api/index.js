const router = require('express').Router();
const locationsRoutes = require('./locationsRoutes');
const travellersRoutes = require('./travellersRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/locationsRoutes', locationsRoutes);
router.use('/travellersRoutes', travellersRoutes);
router.use('/tripsRoutes', tripsRoutes);

module.exports = router;