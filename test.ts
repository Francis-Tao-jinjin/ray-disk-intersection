import tape = require('tape');
import {
    Plane,
    Disk,
    intersectDisk,
    intersectPlane,
} from './src';

tape('plane intersection', async (t) => {
    const plane:Plane = {
        n: [-1, -1, -1],
        p: [0, 0, 0],
    };
    const ray = {
        origin: [10, 10, 10],
        dir: [-1, -1, -1],
    };
    const result = intersectPlane(plane, ray);
    console.log(result);
    if (result) {
        t.equal(Math.abs(result - Math.sqrt(10 * 10 * 3)) < 1e-6, true, 'distance torlerance is smaller than 1e-6');
    }
    t.end();
});

tape('disk intersection', async (t) => {
    const disk:Disk = {
        n: [-1, -1, -1],
        p: [0, 0, 0],
        r: 1,
    };
    const ray = {
        origin: [10, 10, 10],
        dir: [-1, -1, -1],
    };
    const result = intersectDisk(disk, ray);
    console.log(result);
    if (result) {
        t.equal(Math.abs(result - Math.sqrt(10 * 10 * 3)) < 1e-6, true, 'distance torlerance is smaller than 1e-6');
    }
    t.end();
});

tape('disk intersection 2', async (t) => {
    const disk:Disk = {
        n: [-1, -1, -1],
        p: [0, 0, 0],
        r: 1,
    };
    const ray = {
        origin: [10, 10, 10],
        dir: [-1.5, -1, -1.5],
    };
    const result = intersectDisk(disk, ray);
    t.equal(result, null, 'ray has no intersect with disk');
    t.end();
});