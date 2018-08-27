import React, { Component } from 'react';
import './css/centerHelpPage.css';

class CenterHelpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="BlockHelp">
                <div className="Block_title">
                    Help
                </div>
                <div className="Block_msg">
                    Something get wrong?
                </div>
                <a href="mailto:bgm537@saybgm.me">
                    <div className="Block_btn">
                        We can Help <span className="btn_arrow">➔</span>
                    </div>
                </a>
            </div>
         );
    }
}
 
export default CenterHelpPage;