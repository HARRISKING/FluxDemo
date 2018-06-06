import React from 'react';
import ReactDOM from 'react-dom';
import Controller from './store/Controller.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Controller />, 
    document.getElementById('root')
);
registerServiceWorker();
