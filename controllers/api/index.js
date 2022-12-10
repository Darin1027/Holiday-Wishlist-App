const router = require('express').Router();



const listRoutes = require('./listRoutes');
const userRoutes = require('./userRoutes');








router.use('/user', userRoutes);
router.use('/list', listRoutes);

module.exports = router;