import React, { Component } from 'react';
import './css/ParticipateJoin.css';

class Participate extends Component {
    render() {
        return (
            <div className="Participate_Join">
                {this.props.children}
            </div>
        );
    }
}

export default Participate;