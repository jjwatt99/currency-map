import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import searchApi from './searchApi.js';

ReactDOM.render(<App searchApi={searchApi}/>, document.getElementById('app'));