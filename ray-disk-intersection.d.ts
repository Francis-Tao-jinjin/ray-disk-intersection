import { vec3 } from 'gl-matrix';
import { Ray } from './ray-plane-intersection';
export declare type Disk = {
    n: vec3 | number[];
    p: vec3 | number[];
    r: number;
};
export declare function intersectDisk(disk: Disk, ray: Ray): number | null;
