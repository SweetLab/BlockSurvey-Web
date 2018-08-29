import React from 'react';
import './css/Inputbox.css';

const Inputbox = ({title, action, onPW, value}) => {
  return (
    <div className="Inputbox">
      <div className="Input-title">
        {title}
      </div>
      <input type={onPW ? "password" : "text"} value={value} onChange={(event)=>action(event.target.value)}/>
    </div>
  )
}

export default Inputbox;