import { vec3, ReadonlyVec3 } from 'gl-matrix';

export type Plane = {
    n:vec3|number[],    // normalVector of plane
    p:vec3|number[],    // a point on the plane
};

export function intersectPlane(plane:Plane, ray:{ origin:number[]|vec3, dir:number[]|vec3 }) : number|null {
    const n = vec3.normalize(vec3.create(), plane.n as ReadonlyVec3);
    const dir = vec3.normalize(vec3.create(), ray.dir as ReadonlyVec3);

    const denominator = vec3.dot(n, dir);
    if (denominator > 1e-6) {
        const PO = vec3.sub(vec3.create(), plane.p as ReadonlyVec3, ray.origin as ReadonlyVec3);
        const t = vec3.dot(PO, n) / denominator;
        if (t >= 0) {
            return t;
        }
    }
    return null;
}