import React, { Component } from 'react';
import './css/MenuDefaultLayout.css';

class MenuDefaultLayout extends Component {
  render() { 
    const {children} = this.props;
    return (
      <div className="MenuDefaultLayout">
        <div className="Menu-contents">
          {children}
        </div>
      </div>
    );
  }
}
 
export default MenuDefaultLayout;