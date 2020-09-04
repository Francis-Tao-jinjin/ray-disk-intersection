"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectPlane = void 0;
var gl_matrix_1 = require("gl-matrix");
function intersectPlane(plane, ray) {
    var n = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), plane.n);
    var dir = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), ray.dir);
    var denominator = gl_matrix_1.vec3.dot(n, dir);
    if (Math.abs(denominator) > 1e-6) {
        var PO = gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), plane.p, ray.origin);
        var t = gl_matrix_1.vec3.dot(PO, n) / denominator;
        if (t >= 0) {
            return t;
        }
    }
    return null;
}
exports.intersectPlane = intersectPlane;
//# sourceMappingURL=ray-plane-intersection.js.map