const router = require('express').Router();

const apiRoutes = require('./api');
const adminRoutes = require('./adminRoutes.js');
const publicRoutes = require('./publicRoutes.js');

router.use('/', publicRoutes);
router.use('/dashboard', adminRoutes);
router.use('/api', apiRoutes);

module.exports = router;