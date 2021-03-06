'use strict';

module.exports = app => {
  const { STRING, BIGINT, DATE, DECIMAL } = app.Sequelize;

  return app.model.define('stockinbill', {
    uuid: {
      type: STRING(38),
      allowNull: false,
      primaryKey: true,
    },
    version: {
      type: BIGINT,
      allowNull: false,
    },
    lastModifiedTime: {
      type: DATE,
      allowNull: false,
    },
    lastModifierName: {
      type: STRING(76),
      allowNull: false,
    },
    lastModifierId: {
      type: STRING(38),
      allowNull: false,
    },
    createdTime: {
      type: DATE,
      allowNull: false,
    },
    creatorName: {
      type: STRING(76),
      allowNull: false,
    },
    creatorId: {
      type: STRING(38),
      allowNull: false,
    },
    source: {
      type: STRING(255),
      allowNull: true,
    },
    status: {
      type: STRING(20),
      allowNull: true,
    },
    stockInType: {
      type: STRING(20),
      allowNull: true,
    },
    stockInTotalQty: {
      type: DECIMAL,
      allowNull: false,
    },
    remark: {
      type: STRING(255),
      allowNull: true,
    },
    orgUuid: {
      type: STRING(38),
      allowNull: false,
    },
    billNumber: {
      type: STRING(38),
      allowNull: false,
    },
    warehouseUuid: {
      type: STRING(38),
      allowNull: true,
    },
  }, {
    createdAt: 'createdTime',
    updatedAt: 'lastModifiedTime',
    tableName: 'stockinbill',
  });
};
