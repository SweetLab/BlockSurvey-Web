import React, { Component } from 'react';
import TopBar from './TopBar';
import Nav from './Nav';
import '../Css/viewpage.css';

class ViewPage5 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="page5"  className="View_Main_Page">
                <TopBar>

                </TopBar>
                <Nav>

                </Nav>
            </div>
         );
    }
}
 
export default ViewPage5;