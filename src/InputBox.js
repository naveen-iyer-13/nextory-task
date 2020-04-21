import React from 'react';
import { Input } from 'antd';


const InputBox = (props) => {
  // console.log(props);
  return (
    <div className="inputbox-container">
      <label className="label">{props.label}</label>
      <Input onChange={(e) => props.handleChange(e, props.name)} style={{height: 40}}/>
      {props.showErrorMessage && <span className="error-message">{props.errorMessage}</span>}
    </div>
  );
}

export default InputBox
