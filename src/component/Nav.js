import React from 'react'
import Login from './Login'

const Nav = function (){
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
              <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar12">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar12">
                  <a className="navbar-brand d-none d-md-block" href="#">
                      <i className="fa d-inline fa-lg fa-circle"></i>
                      <b> eSportProphet</b>
                  </a>
                  <ul className="navbar-nav mx-auto">
                      <li className="nav-item"> <a className="nav-link" href="#">Home</a> </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Leagues</a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="#">Liga koju igrac igra 1</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Liga koju igrac igra 2</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Liga koju igrac igra 3</a>
                          </div>
                        </li>
                        <li className="nav-item dropdown"/>
                        <li className="nav-item"> <a className="nav-link" href="#">Rankigs</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#">Rules</a> </li>
                    </ul>
                  <ul className="navbar-nav">
                      <li className="nav-item"> <Login/> </li>
                  </ul>
              </div>            
          </div>
      </nav>
  )
}

export default Nav;