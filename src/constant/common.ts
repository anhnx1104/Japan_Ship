import type { Sort } from 'types/common';
import {
  HOME_PATH,
  PRODUCT_DETAIL_PATH,
  SEARCH_PATH,
  TERM_OF_SERVICE,
  LOGIN_PATH,
  REGISTER_PATH,
  CHANGE_PASSWORD_PATH,
  CHANGE_PASSWORD_SUCCESS_PATH,
  PASSWORD_RECOVERY_PATH,
} from './route-path';

const STEP_1 = 1;
const STEP_2 = 2;
const STEP_3 = 3;
const STEP_4 = 4;
const UPLOAD_TYPE_PROFILE = 'PROFILE';
const UPLOAD_TYPE_IMAGE = '1';
const UPLOAD_TYPE_ORTHER = '2';
const THUMBNAIL = '1';
const NO_THUMBNAIL = '2';
const ADDRESS_DEFAULT = 1;
const ADDRESS_UN_DEFAULT = 2;
const ON_SALE_PRODUCT = 'on_sale';

// MALE: 1, FEMALE: 2
const GENDERS = [1, 2];

const PRODUCT_SORT: Record<string, Sort> = {
  PRICE_ASC: {
    sortBy: 'price',
    sortDirection: 'ASC',
  },
  PRICE_DESC: {
    sortBy: 'price',
    sortDirection: 'DESC',
  },
  LATEST: {
    sortBy: 'created',
    sortDirection: 'DESC',
  },
  OLDEST: {
    sortBy: 'created',
    sortDirection: 'ASC',
  },
};

const NOTIFICATION_TYPE: Record<string, number> = {
  COST_NOTIFICATION: 3,
};

const PRODUCT_STATUS = {
  ON_SALE: 1,
  SOLD_OUT: 2,
};

const FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
const SEARCH_BAR_ROUTE = [
  CHANGE_PASSWORD_PATH,
  CHANGE_PASSWORD_SUCCESS_PATH,
  PASSWORD_RECOVERY_PATH,
  REGISTER_PATH,
  LOGIN_PATH,
  HOME_PATH,
  SEARCH_PATH,
  `${PRODUCT_DETAIL_PATH}[productId]`,
  TERM_OF_SERVICE,
];

const TYPE_FORM = {
  UPDATE: 'UPDATE',
  CREATE: 'CREATE',
};

export {
  STEP_1,
  STEP_2,
  STEP_3,
  STEP_4,
  GENDERS,
  UPLOAD_TYPE_PROFILE,
  UPLOAD_TYPE_IMAGE,
  UPLOAD_TYPE_ORTHER,
  THUMBNAIL,
  NO_THUMBNAIL,
  ADDRESS_DEFAULT,
  ADDRESS_UN_DEFAULT,
  PRODUCT_SORT,
  ON_SALE_PRODUCT,
  SEARCH_BAR_ROUTE,
  FILE_TYPES,
  PRODUCT_STATUS,
  TYPE_FORM,
  NOTIFICATION_TYPE,
};
