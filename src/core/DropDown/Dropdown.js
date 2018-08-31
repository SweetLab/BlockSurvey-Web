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
  constructor (props) {
    super(props)
    this.state = {
      selected: '객관식'
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    this.setState({selected: option})
  }

  render() {
    const defaultOption = this.state.selected

    return (
        <Dropdown 
          className="DropDown"  
          options={options} 
          onChange={this._onSelect} 
          value={defaultOption} 
          placeholder="선택" 
          arrowClosed={arrowClosed}
          arrowOpen={arrowOpen}
        />
    )
  }
}

export default Dropdowns;