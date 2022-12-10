const router = require('express').Router();

const friendRoutes = require('./friendRoutes');
const listRoutes = require('./friendRoutes');
const userRoutes = require('./friendRoutes');


router.use('/friends', friendRoutes);
router.use('/user', userRoutes);
router.use('/list', listRoutes);

module.exports = router;