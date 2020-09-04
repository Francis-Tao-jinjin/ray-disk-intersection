import { vec3 } from 'gl-matrix';
export declare type Plane = {
    n: vec3 | number[];
    p: vec3 | number[];
};
export declare type Ray = {
    origin: number[] | vec3;
    dir: number[] | vec3;
};
export declare function intersectPlane(plane: Plane, ray: Ray): number | null;
