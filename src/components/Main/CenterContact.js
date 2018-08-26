import React, { Component } from 'react';
import './css/centerContact.css';

class CenterContact extends Component {
    render() { 
        return ( 
            <div className="BlockContact">
                <div className="Block_title">
                    Contact Us
                </div>
                <div className="Block_msg">
                    Thank you for visiting <span>BlockSurvey</span>
                </div>
                <div className="Block_btn">
                    Contact <span className="btn_arrow">➔</span>
                </div>
            </div>
         );
    }
}
 
export default CenterContact;