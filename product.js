const express = require('express');
const router = express.Router();



const { getProducts,postProducts } = require('../controllers/productController');

router.route('/products').get(getProducts);
router.route('/postproduct').post(postProducts)

module.exports = router;