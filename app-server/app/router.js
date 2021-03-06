'use strict';

/**
 * 路由
 * @param {Egg.Application} app 当前应用的实例
 * @author ruiyong-lee
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/weapp/goods/getGoods', controller.weapp.getGoods);
  router.post('/weapp/order/queryOrderBill', controller.weapp.queryOrderBill);
  router.post('/weapp/order/getOrderBill', controller.weapp.getOrderBill);
  router.post('/weapp/login', controller.weapp.login);
};
