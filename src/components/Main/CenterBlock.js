import React, { Component } from 'react';
import '../../components/Main/css/centerBlock.css';

class Center_Block extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="Center_Position_Text">
                <span className="Main_Text">BlockSurvey</span>
                <span className="Sub_Text">Safe and transparent</span>
            </div>
         );
    }
}
 
export default Center_Block;