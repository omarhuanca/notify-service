import { Router } from 'express';

import { joiValidator } from '@middlewares/joi';
import { notifySchema } from '@shared/notifySchema';
import { getAll, getOne, create, update, softDelete } from '@controllers/notifyController';

// Init router and path
const router = Router();

// Add sub-routes
router.get('/', getAll);
router.get('/:id', getOne);

router.post('/', [joiValidator(notifySchema)], create);

router.put('/:id', [joiValidator(notifySchema)], update);

router.delete('/:id', [joiValidator(notifySchema)], softDelete);

export default router;
