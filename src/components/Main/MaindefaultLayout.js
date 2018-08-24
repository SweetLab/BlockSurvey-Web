import React, { Component } from 'react';
import Navi from './Navi';
import TopBar from './TopBar';

class MaindefaultLayout extends Component {
  render() {
    const {pageId} = this.props;
    return (
      <div className="section" id={`page${pageId}`}>
        <TopBar />
        <Navi />
        {this.props.children}
      </div>
        
    );
  }
}
 
export default MaindefaultLayout;