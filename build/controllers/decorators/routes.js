"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routeBinder('get');
exports.post = routeBinder('post');
exports.put = routeBinder('put');
exports.patch = routeBinder('patch');
exports.del = routeBinder('delete');
