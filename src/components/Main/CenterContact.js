import React, { Component } from 'react';
import './css/centerContact.css';

class CenterContact extends Component {
    render() { 
        return ( 
            <div className="BlockContact">
                <div className="Contact_title">
                    Contact Us
                </div>
                <div className="Contact_msg">
                    Thank you for visiting <span>BlockSurvey</span>
                </div>
                <div className="Contact_btn">
                    Contact
                </div>
            </div>
         );
    }
}
 
export default CenterContact;