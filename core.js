// Lang
import eq from './eq';
import toString from './toString';
import isObject from './isObject';
import isSymbol from './isSymbol';
import isString from './isString';
import isBoolean from './isBoolean';
import isElement from './isElement';
import isText from './isText';
import isFunction from './isFunction';

// Object
import get from './get';
import set from './set';

let __ = {

    // Lang
    eq,
    toString,
    isObject, isSymbol, isString, isBoolean, isElement, isText, isFunction,

    // Object
    get, set

};

// 判断当前环境，如果不是浏览器环境
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = __;
}
// 浏览器环境下
// 因为浏览器下挂载到window对象上
// 为了防止覆盖，额外提供一个noConflict方法，用以在覆盖的时候恢复
else {
    let
        // 保存之前的__，防止直接覆盖
        $__ = window.__;

    __.noConflict = function (deep) {

        // 如果当前的__是被最新的__覆盖的
        // 恢复之前的
        if (window.__ === __) {
            window.__ = $__;
        }

        return __;

    };
    // 挂载库对象到根
    window.__ = __;
}
