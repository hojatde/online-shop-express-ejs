"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productDiscount_1 = require("../../controller/admin/productDiscount");
const adminProductDiscountRouter = (0, express_1.Router)();
adminProductDiscountRouter.get('/productDiscounts', productDiscount_1.getAdminProductDiscountsList);
adminProductDiscountRouter.get('/productDiscount/create', productDiscount_1.getAdminProductDiscountCreate);
adminProductDiscountRouter.post('/productDiscount/create', productDiscount_1.postAdminProductDiscountCreate);
adminProductDiscountRouter.get('/productDiscount/:productDiscountId/edit', productDiscount_1.getAdminProductDiscountEdit);
exports.default = adminProductDiscountRouter;
