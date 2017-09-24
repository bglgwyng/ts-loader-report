import * as THREE from 'three';
require('three-obj-loader')(THREE);
// tsc throws an error only on `THREE.InvalidPropert`
THREE.OBJLoader; // ts-loader throws a warning
THREE.InvalidProperty; // ts-loader throws an error