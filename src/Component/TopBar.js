import React, { Component } from 'react';
import Logo from '../Image/menu-btn.png'

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Logo">
                <img onClick={this.props.onChangeScroll} src={Logo} alt="로고"/>
            </div>
         );
    }
}
 
export default TopBar;