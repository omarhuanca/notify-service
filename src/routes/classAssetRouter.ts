import { Router } from 'express';

import { joiValidator } from '@middlewares/joi';
import { classAssetSchema } from '@shared/classAssetSchema';
import { getAll, getOne, create, update, softDelete } from '@controllers/classAssetController';

// Init router and path
const router = Router();

// Add sub-routes
router.get('/', getAll);
router.get('/:id', getOne);

router.post('/', [joiValidator(classAssetSchema)], create);

router.put('/:id', [joiValidator(classAssetSchema)], update);

router.delete('/:id', [joiValidator(classAssetSchema)], softDelete);

export default router;
