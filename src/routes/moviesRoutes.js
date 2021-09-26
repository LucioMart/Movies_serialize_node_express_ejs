const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.listado);
router.get('/movies/new', moviesController.nueva);
router.get('/movies/recommended', moviesController.recomendado);
router.get('/movies/detail/:id', moviesController.detalle);


module.exports = router;