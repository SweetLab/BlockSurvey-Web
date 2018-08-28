import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/centerMyPage.css';

class CenterMyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Mypage">
                <div className="Block_title">
                    My Page
                </div>
                <div className="Block_msg">
                    Management My Settings & Profile
                </div>
                <Link to="/mypage">
                    <div className="Block_btn">
                        Go to Page <span className="btn_arrow">➔</span>
                    </div>
                </Link>
                
            </div>
         );
    }
}
 
export default CenterMyPage;