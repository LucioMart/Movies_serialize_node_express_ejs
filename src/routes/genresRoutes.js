const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

router.get('/genres', genresController.listado);
router.get('/genres/detail/:id', genresController.detalle);


module.exports = router;