import { Router } from 'express';
import { sampleController } from '@app/modules/sample';
import { homeController } from '@app/modules/home';
const router = Router();

router.use('/', homeController);
router.use('/sample', sampleController);

export default router;
