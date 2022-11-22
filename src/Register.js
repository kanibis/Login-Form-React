import React, {useState, useEffect} from 'react';

function App() {
// const [username, setUsername] = useState("")
// const [email, setEmail] = useState("")
// const [password, setPassword] = useState("") 
const initialValues = {username: "", email: "", password:""}
const [formValues, setFormValues] = useState(initialValues)

const [formErrors, setFormErrors] = useState({})
const [isSubmit, setIsSubmit] = useState(false)

const handleChange = (e) => {
  const {name, value} = e.target
  setFormValues({...formValues, [name]:value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  setFormErrors(validate(formValues))
  setIsSubmit(true)
}

useEffect(() => {
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues)
  }
}, [formErrors])

const validate = (values) => {
  const errors = {}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  if (!values.username){
    errors.username = 'Username is required!'
  }
  if (!values.email){
    errors.email = 'Email is required!'
  } else if (!regex.test(values.email)) {
    errors.email = "Please enter a valid email"
  }
  if (!values.password){
    errors.password = 'Password is required!'
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters"
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters"
  }
  return errors
}

// const handlePasswordChange = (e) => {
//   setPassword(e.target.value)
//   console.log(password)
// }

return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? <div className="success-message">Signed in successfully!</div> : ""}
    
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      
      <h1 className="title">Login Form</h1>
      <div className='divider'></div>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='field'>
          <label htmlFor='username'>Username: </label><br/>
          <input 
            type="text" 
            name="username"
            placeholder='Username'
            value={formValues.username}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <p>{formErrors.username}</p>
        <div className='field'>
          <label htmlFor='email'>Email: </label><br/>
          <input 
            type="text"
            name="email" 
            placeholder='Email' 
            value={formValues.email} 
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <p>{formErrors.email}</p>
        <div className='field'>
          <label htmlFor='password'>Password: </label><br/>
          <input 
            type="password"
            name="password" 
            placeholder='Password'
            value = {formValues.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>
        <button type='submit' className='submit-btn'>Submit</button>
      </form>
    </div>
  );
}