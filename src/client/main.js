// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Import our Component
import HelloWorld from './components/HelloWorld.js';

// Import Styles
import style from './stylesheets/main.scss';

// Render application
ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('mountPoint')
);