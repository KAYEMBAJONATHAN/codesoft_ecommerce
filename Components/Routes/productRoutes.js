const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  postAll,
  updateAllById,
  deleteProduct,
  getAllCounted,
  getFeatured,
  getFeaturedCount,
} = require('../../controller/procductController');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', postAll);
router.put('/', updateAllById);

router.delete('/:id', deleteProduct);

router.get('/get/count', getAllCounted);
router.get('/get/featured', getFeatured);
router.get('/get/featured/:count', getFeaturedCount);

module.exports = router;
