const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

// /api/users
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
