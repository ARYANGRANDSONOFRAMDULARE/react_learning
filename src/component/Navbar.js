import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav   className="navbar navbar-expand-lg " id='mainnav' >
    <div   id="nav" className="container-fluid" >
      <Link style={{color:props.modesn}} className="navbar-brand" to  ="/" >{props.titles}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link style={{color:props.modesn}} className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link style={{color:props.modesn}}className="nav-link" to="/about" >About</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='white'?'dark':'white'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.change} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
Navbar.prototype = {
titles:PropTypes.string.isRequired
}
Navbar.defaultProps = {
  titles:'React'
  }
  