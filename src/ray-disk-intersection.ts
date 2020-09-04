import { vec3, ReadonlyVec3 } from 'gl-matrix';
import { Ray, intersectPlane } from './ray-plane-intersection';

export type Disk = {
    n:vec3|number[],    // normalVector of plane
    p:vec3|number[],    // the center point of the disk
    r:number,           // the radius of the disk
};

export function intersectDisk(disk:Disk, ray:Ray) : number|null {
    const t = intersectPlane({n: disk.n, p: disk.p}, ray);
    if (t !== null) {
        const dir = vec3.normalize(vec3.create(), ray.dir as ReadonlyVec3);
        const p = vec3.scaleAndAdd(vec3.create(), ray.origin as ReadonlyVec3, dir as ReadonlyVec3, t);
        const v = vec3.sub(vec3.create(), p, disk.p as ReadonlyVec3);
        const d2 = vec3.dot(v, v);
        if (Math.sqrt(d2) <= disk.r) {
            return t;
        }
    }
    return null;
}