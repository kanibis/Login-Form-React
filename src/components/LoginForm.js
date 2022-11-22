import React, {useState} from 'react'

const LoginForm = ({Login, error}) => {
  const [details, setDetails] = useState({username: "", email: "", password:""})

  const handleSubmit = (e) => {
    e.preventDefault()
    Login(details)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setDetails({...details, [name]:value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h2>Login</h2>
        {(error !== "") ? <div className='error'>{error}</div> : ""}
        <div className='form-field'>
        <label htmlFor='username'>Username: </label>
        <input 
          type="text" 
          name="username"
          id="name"
          placeholder='Username'
          onChange={handleChange}
          value={details.username}
          autoComplete="off"
        />
        </div>
        <div className='form-field'>
        <label htmlFor='email'>Email: </label>
        <input 
          type="email" 
          name="email"
          id="nemail"
          placeholder='Email'
          onChange={handleChange}
          value={details.email}
          autoComplete="off"
        />
        </div>
        <div className='form-field'>
        <label htmlFor='username'>Password: </label>
        <input 
          type="password" 
          name="password"
          id="password"
          placeholder='Password'
          onChange={handleChange}
          value={details.password}
          autoComplete="off"
        />
        </div>
        <button type='submit' className='submit-btn'>Login</button>
      </div>

    </form>
  )
}

export default LoginForm