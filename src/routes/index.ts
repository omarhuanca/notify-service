import { Router } from 'express';
import classAssetRouter from './classAssetRouter';
import topicRouter from './topicRouter';
import notifyRouter from './notifyRouter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/classasset', classAssetRouter);

router.use('/topic', topicRouter);

router.use('/notify', notifyRouter);

// Export the base-router
export default router;
