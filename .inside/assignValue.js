import baseAssignValue from './baseAssignValue';

/**
 *设置对象的值
 *
 * @private
 * @param {Object} object 设置的对象
 * @param {string} key 需要设置的属性
 * @param {*} value 设置的值
 */
export default function (object, key, value) {
    baseAssignValue(object, key, value);
};
