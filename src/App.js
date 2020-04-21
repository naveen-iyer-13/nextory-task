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
        else {
          setIsValid({...isValid, firstName: false})
        }
        break;
      case "lastName":
        if (nameRegex.test(value)) {
          setIsValid({...isValid, lastName: true})
        }
        else {
          setIsValid({...isValid, lastName: false})
        }
        break;
      case "email":
        if (emailRegex.test(value)) {
          setIsValid({...isValid, email: true})
        }
        else {
          setIsValid({...isValid, email: false})
        }
        break;
      case "password":
        if (passwordRegex.test(value)) {
          setIsValid({...isValid, password: true})
        }
        else {
          setIsValid({...isValid, password: false})          
        }
        break;
      default:
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
        <div className="form-parent">
          <div className="form-header">Get Started Today!</div>
          <form onSubmit={handleSubmit} className="form">
            <div className="level-container">
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
            <div className="level-container">
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
            <button className="submit-button">Claim your free trial</button>
            <span>You are agreeing to our <a href="/">Terms and Services</a></span>
          </form>
        </div>
    </div>
  )

}



export default App
