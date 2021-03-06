import React from 'react'
import PropTypes from 'prop-types'
import {Link
} from "react-router-dom";


//stateless function component
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>  {/*using template literal to call the props */}
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="bg-primary rounded mx-2"  style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() =>{props.toggleMode('primary')}}></div> {/*sending a extra parameter to togglemode to change color */}
      <div className="bg-info rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() =>{props.toggleMode('info')}}></div>  
      <div className="bg-dark rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() =>{props.toggleMode('dark')}}></div>  
      <div className="bg-warning rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() =>{props.toggleMode('warning')}}></div>  
      <div className="bg-success rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() =>{props.toggleMode('success')}}></div>  
      <div className="bg-danger rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() =>{props.toggleMode('danger')}}></div>  
    </div>
  </div>
</nav>
  )
}
    //we are defining proptypes for every props used in this component
    Navbar.propTypes  = {title: PropTypes.string.isRequired ,
                        aboutText: PropTypes.string.isRequired
    } 
 //we are  defining default props when we are not getting any props
    Navbar.defaultProps = {
        title: 'Set title here',
        aboutText: 'About'
    }