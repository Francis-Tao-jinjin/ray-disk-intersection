# ray-disk-intersection

Calculate the intersection of a ray and a disk or plane in three dimensions

A disk is generally defined by a position (the disk center's position), a normal and a radius. First we can test if the ray intersects the plane in which lies the disk. Then compute the distance from this point to this disk's center. If this distance is lower or equal to the disk radius, then the ray intersects the disk.

**Notice**
Whether the plane faces the ray direction or the back faces the ray direction, the intersection of lines and surfaces can all be detected. 

`npm install ray-disk-intersection`

**Methods**
    
-   `intersectPlane(plane, ray) => null|number`
-   `intersectDisk(disk, ray) => null|number`

return the scale factor of ray if there has one and only one intersection, return null other wise.

**Type**
```javascript
type Ray = {
    origin:vec3|number[],
    dir:vec3|number[],
}

type Plane = {
    n:vec3|number[],    // normalVector of plane
    p:vec3|number[],    // a point on the plane
}

type Disk = {
    n:vec3|number[],    // normalVector of plane
    p:vec3|number[],    // the center point of the disk
    r:number,           // the radius of the disk
}
```

**Example**
```javascript
import {
    Plane,
    Disk,
    intersectDisk,
    intersectPlane,
} from 'ray-disk-intersection';
import { vec3 } from 'gl-matrix';

const plane:Plane = {
    n: vec3.normalize(vec3.create(), [-1, -1, -1]),
    p: [0, 0, 0],
};

const ray = {
    origin: [10, 10, 10],
    dir: vec3.normalize(vec3.create(), [-1, -1, -1]),
};

const result = intersectPlane(plane, ray);
if (result) {
    const point = vec3.scaleAndAdd(vec3.create(), ray.origin, dir, result);
}

const disk:Disk = {
    n: vec3.normalize(vec3.create(), [-1, -1, -1]),
    p: [0, 0, 0],
    radius: 1,
};

const result2 = intersectDisk(disk, ray);
if (result2) {
    const point = vec3.scaleAndAdd(vec3.create(), ray.origin, dir, result2);
}

const ray2:Ray = {
    origin: [10, 10, 10],
    dir: vec3.normalize(vec3.create(), [-1.5, -1, -1.5]),
}
const result3 = intersectDisk(disk, ray2);
console.log(result3); // should be null
```
