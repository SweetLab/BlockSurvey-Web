import React, { Component } from 'react';

class MaindefaultLayout extends Component {
  render() {
    const {pageId} = this.props;
    return (
      <div className="section" id={`page${pageId}`}>
        {this.props.children}
      </div>
    );
  }
}
 
export default MaindefaultLayout;