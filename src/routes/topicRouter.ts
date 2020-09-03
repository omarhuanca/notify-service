import { Router } from 'express';

import { joiValidator } from '@middlewares/joi';
import { topicSchema } from '@shared/topicSchema';
import { getAll, getOne, create, update, softDelete } from '@controllers/topicController';

// Init router and path
const router = Router();

// Add sub-routes
router.get('/', getAll);
router.get('/:id', getOne);

router.post('/', [joiValidator(topicSchema)], create);

router.put('/:id', [joiValidator(topicSchema)], update);

router.delete('/:id', [joiValidator(topicSchema)], softDelete);

export default router;
