import React, { Component } from 'react';

class Couter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { colorVal, turnRed, turnGreen, turnYellow } = this.props
        return (
            <div style={{
                    width:600,
                    height:400, 
                    margin:'0 auto', 
                    border:'1px solid', 
                    textAlign:'center', 
                    background:colorVal
                }}>
                
                <h1 style={{width:300,background:'#fff',margin:'0 auto'}}>颜色改变装置</h1>
                <div>
                    <button onClick={turnGreen}>绿色</button>
                    <button onClick={turnYellow}>黄色</button>
                    <button onClick={turnRed}>红色</button>
                </div>
            </div>
        )
    }

}

export default Couter;