import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
export {default as Home} from './pages/Home.js';
export {default as AboutExercise} from './pages/AboutExercise.js';
ReactDOM.render(
    <Root/>,
  document.getElementById('root')
); 
