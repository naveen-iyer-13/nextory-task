import React, { useState } from 'react';
import InputBox from './InputBox.js'
import { nameRegex, emailRegex, passwordRegex } from './regex'
import './App.css';

function App(props){

  const [isFormSubmitted, setFormSubmitted] = useState(false)
  const [isValid, setIsValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  })
  const [formValues, setFormValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: ""
  })

  const checkValidation = (name, value) => {
    switch (name) {
      case "firstName":
        if (nameRegex.test(value)) {
          setIsValid({...isValid, firstName: true})
        }
        break;
      case "lastName":
        if (nameRegex.test(value)) {
          setIsValid({...isValid, lastName: true})
        }
        break;
      case "email":
        if (emailRegex.test(value)) {
          setIsValid({...isValid, email: true})
        }
        break;
      case "password":
        if (passwordRegex.test(value)) {
          setIsValid({...isValid, password: true})
        }
        break;
    }
  }


  const handleChange = (e, name) => {
    checkValidation(name, e.target.value)
    setFormValues({...formValues, [name]: e.target.value})
  }

  const handleSubmit = (e) => {
    setFormSubmitted(true)
    console.log(formValues);
    e.preventDefault()
  }


  return (
    <div className="app">
        <div style={{margin: "50px auto", width: 500, border: "1px solid #637a91"}}>
          <div className="form-header" style={{backgroundColor: "#637a91", fontSize: 20, height: 50, display: "flex", justifyContent: "center", color: "#FFFFFF", alignItems: "center"}}>Get Started Today!</div>
          <form onSubmit={handleSubmit} style={{width: "450px", margin: "0px auto",textAlign: "left"}}>
            <div className="level-1" style={{display: "flex", margin: "20px auto", justifyContent: "space-between"}}>
              <InputBox
                showErrorMessage={isFormSubmitted && !isValid.firstName}
                value={formValues.firstName}
                errorMessage="Please enter a valid first name"
                handleChange={handleChange} name="firstName" label="First Name"/>
              <InputBox
                showErrorMessage={isFormSubmitted && !isValid.lastName}
                value={formValues.lastName}
                errorMessage="Please enter a valid last name"
                handleChange={handleChange} name="lastName" label="Last Name"/>
            </div>
            <div className="level-1" style={{display: "flex", margin: "20px auto", justifyContent: "space-between"}}>
              <InputBox
                showErrorMessage={isFormSubmitted && !isValid.email}
                value={formValues.email}
                errorMessage="Please enter a valid email"
                handleChange={handleChange} name="email" label="Email"/>
              <InputBox
                showErrorMessage={isFormSubmitted && !isValid.password}
                value={formValues.password}
                errorMessage="Please enter a valid password"
                handleChange={handleChange} name="password" label="Password"/>
            </div>
            <button className="submit-button" style={{outline: "none", color: "#FFFFFF", fontSize: 20, cursor: "pointer", backgroundColor: "#5fcf80", width: "100%", height: 50, margin: "20px auto 5px"}}>Claim your free trial</button>
            <span>You are agreeing to our <a href="/">Terms and Services</a></span>
          </form>
        </div>
    </div>
  )

}



export default App
