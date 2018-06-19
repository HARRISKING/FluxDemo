import React from 'react';
import ReactDOM from 'react-dom';
import Color from './component/Color.jsx';
import Reductor from './reducers';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const store = createStore(Reductor)

function mapStateToProps(state) {
    return {
        colorVal: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        redClick: () => dispatch({ type: 'isRed' }),
        blueClick: () => dispatch({ type: 'isBlue' }),
        yellowClick: () => dispatch({ type: 'isYellow' })
    }
  }

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Color)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') 
); 