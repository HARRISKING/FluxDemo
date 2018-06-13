import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Color from './components/Color.jsx';
import colorControl from './reducers'

// 创建store
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

// 监听：一旦state发生变化，就自动执行这个函数
store.subscribe(render)

registerServiceWorker();
