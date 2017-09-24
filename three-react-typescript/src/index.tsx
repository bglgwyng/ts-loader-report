import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import * as THREE from 'three';
require('three-obj-loader')(THREE);
THREE.OBJLoader;
// THREE.InvalidProperty;

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
