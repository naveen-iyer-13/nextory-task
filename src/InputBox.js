import React from 'react';
import { Input } from 'antd';


const InputBox = (props) => {
  // console.log(props);
  return (
    <div className="container" style={{width: "45%"}}>
      <label style={{display: "block", textAlign: "left", color: "#000000", fontSize: 17}}>{props.label}</label>
      <Input onChange={(e) => props.handleChange(e, props.name)} style={{height: 40}}/>
      {props.showErrorMessage && <span style={{color: "red", fontSize: 12}}>{props.errorMessage}</span>}
    </div>
  );
}

export default InputBox
