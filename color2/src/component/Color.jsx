import React from 'react';
import propsTypes from 'prop-types';


export default class Color extends React.Component {
    render() {
        const { colorVal, redClick, blueClick, yellowClick } = this.props;
        return (
            <div style={{background:colorVal, width:500, height:500, border:'1px solid',margin:'0 auto',textAlign:'center'}}>
                <button onClick={redClick}>红色</button>
                <button onClick={blueClick}>蓝色</button>
                <button onClick={yellowClick}>黄色</button>
            </div>
        )
    }
}

Color.propsTypes = {
    colorVal: propsTypes.string.isRequired,
    redClick: propsTypes.func.isRequired,
    blueClick: propsTypes.func.isRequired,
    yellowClick: propsTypes.func.isRequired
}