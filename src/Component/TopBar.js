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
                <img src={Logo} alt=""/>
            </div>
         );
    }
}
 
export default TopBar;