import express from 'express';

var router = express.Router();

import { router as Create } from './Create/routes.js';
import { router as Show } from './Show/routes.js';
import { router as Search } from './Search/routes.js';
import { router as Filter } from './Filter/routes.js';
import { router as RowShow } from './RowShow/routes.js';

router.use('/Create', Create);
router.use('/Show', Show);
router.use('/Search', Search);
router.use('/Filter', Filter);
router.use('/RowShow', RowShow);

export { router };