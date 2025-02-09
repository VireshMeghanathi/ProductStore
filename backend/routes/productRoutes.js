import express from 'express';
import { getProducts , createProduct} from '../controller/productController.js';

const router = express.Router();

router.get('/', getProducts);
// router.get('/:id,')
router.post('/',createProduct );

export default router;