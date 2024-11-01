import express from 'express';

var router = express.Router();

import { router as Create } from './Create/routes.js';
import { router as Show } from './Show/routes.js';
import { router as Search } from './Search/routes.js';
import { router as Filter } from './Filter/routes.js';
import { router as RowShow } from './RowShow/routes.js';
import { router as SearchForStatus } from './SearchForStatus/routes.js';
import { router as Delete } from './Delete/routes.js';
import { router as Alter } from './Alter/routes.js';
import { router as Bulk } from './Bulk/routes.js';

router.use('/Create', Create);
router.use('/Show', Show);
router.use('/Search', Search);
router.use('/Filter', Filter);
router.use('/RowShow', RowShow);
router.use('/SearchForStatus', SearchForStatus);
router.use('/Delete', Delete);
router.use('/Alter', Alter);
router.use('/Bulk', Bulk);

export { router };