import React from 'react';
import ReactDOM from 'react-dom';
 
import { init } from '../lib/Chip8';
import { App } from './App';
import './index.css';

init().then((wasm) => ReactDOM.render(<App wasm={wasm} />, document.getElementById('app')));
