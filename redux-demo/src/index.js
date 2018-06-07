import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Color from './components/Color.jsx';
import registerServiceWorker from './registerServiceWorker';
import colorControl from './reducers'

const store = createStore( colorControl );
const rootEl = document.getElementById('root');


const render = () => ReactDOM.render(
    <Color
        colorVal = { store.getState() }
        turnRed = { () => store.dispatch({ type: 'TURN_RED' }) }
        turnGreen = { () => store.dispatch({ type: 'TURN_GREEN' }) }
        turnYellow = { () => store.dispatch({ type: 'TURN_YELLOW' }) }
    />, 
    rootEl
);
render()
store.subscribe(render)

registerServiceWorker();
