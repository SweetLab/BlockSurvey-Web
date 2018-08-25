import React, { Component } from 'react';
import './css/centerBlock.css';

class Center_Block extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="Center_Position_Text">
                <div className="Main_Text">BlockSurvey</div>
                <div className="Sub_Text">Safe and transparent</div>
            </div>
         );
    }
}
 
export default Center_Block;