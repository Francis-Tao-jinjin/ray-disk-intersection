"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectDisk = void 0;
var gl_matrix_1 = require("gl-matrix");
var ray_plane_intersection_1 = require("./ray-plane-intersection");
function intersectDisk(disk, ray) {
    var t = ray_plane_intersection_1.intersectPlane({ n: disk.n, p: disk.p }, ray);
    if (t !== null) {
        var dir = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), ray.dir);
        var p = gl_matrix_1.vec3.scaleAndAdd(gl_matrix_1.vec3.create(), ray.origin, dir, t);
        var v = gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), p, disk.p);
        var d2 = gl_matrix_1.vec3.dot(v, v);
        if (Math.sqrt(d2) <= disk.r) {
            return t;
        }
    }
    return null;
}
exports.intersectDisk = intersectDisk;
//# sourceMappingURL=ray-disk-intersection.js.map