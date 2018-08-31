import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import './dropdown.css'

const options = [
  '객관식', '단일입력란'
]

const arrowClosed = (
  <span className="arrow-closed" />
)
const arrowOpen = (
  <span className="arrow-open" />
)


class Dropdowns extends Component {
  render() {
    const { selected, _onSelect, questionNumber } = this.props;

    return (
        <Dropdown 
          className="DropDown"  
          options={options} 
          onChange={ category => _onSelect(category.value, questionNumber) } 
          value={ selected } 
          placeholder="선택" 
          arrowClosed={arrowClosed}
          arrowOpen={arrowOpen}
        />
    )
  }
}

export default Dropdowns;