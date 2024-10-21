import express from 'express';

var router = express.Router();

import { router as RouterForBillsQrCode } from './BillsQrCode/routes.js';
import { router as RouterForBillsStiching } from './BillsStiching/routes.js';
import { router as RouterForDeliveryStiching } from './DeliveryStiching/routes.js';
import { router as RouterForDiscounts } from './Discounts/routes.js';
import { router as RouterForGenerate } from './Generate/routes.js';
import { router as RouterForHeadDeliveryStiching } from './HeadDeliveryStiching/routes.js';
import { router as RouterForItems } from './Items/routes.js';
import { router as RouterForpos } from './pos/routes.js';
import { router as RouterForPurchaseItems } from './PurchaseItems/routes.js';
import { router as RouterForSalesReturns } from './SalesReturns/routes.js';
import { router as RouterForScan } from './Scan/routes.js';
import { router as RouterForScanHead } from './ScanHead/routes.js';
import { router as RouterForSRVoucher } from './SRVoucher/routes.js';
import { router as RouterForStichingPOS } from './StichingPOS/routes.js';
import { router as RouterForSuppliers } from './Suppliers/routes.js';
import { router as RouterForVouchers } from './Vouchers/routes.js';

router.use('/BillsQrCode', RouterForBillsQrCode);
router.use('/BillsStiching', RouterForBillsStiching);
router.use('/DeliveryStiching', RouterForDeliveryStiching);
router.use('/Discounts', RouterForDiscounts);
router.use('/Generate', RouterForGenerate);
router.use('/HeadDeliveryStiching', RouterForHeadDeliveryStiching);
router.use('/Items', RouterForItems);
router.use('/pos', RouterForpos);
router.use('/PurchaseItems', RouterForPurchaseItems);
router.use('/SalesReturns', RouterForSalesReturns);
router.use('/Scan', RouterForScan);
router.use('/ScanHead', RouterForScanHead);
router.use('/SRVoucher', RouterForSRVoucher);
router.use('/StichingPOS', RouterForStichingPOS);
router.use('/Suppliers', RouterForSuppliers);
router.use('/Vouchers', RouterForVouchers);

export { router };