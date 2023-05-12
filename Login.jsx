import React from 'react'
import './Login.css'; 

function Login() {
  return (
    <div className="form-container">
  <form>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email</label>
    <input type="email" className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Enviar</button>
</form>
    </div>
  )
}

export default Login


