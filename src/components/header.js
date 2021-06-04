import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
       <div className="header-area header-transparrent">
           <div className="headder-top header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-2">
                            <div className="logo">
                                <NavLink to="/"><img src="assets/img/logo/logo.png" alt="" /></NavLink>
                            </div>  
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="menu-wrapper">
                                <div className="main-menu">
                                    <nav className="d-none d-lg-block">
                                        <ul id="navigation">
                                            <li><NavLink to="/" exact activeClassName="active-tab">Home</NavLink></li>
                                            <li><NavLink to="/find-job" activeClassName="active-tab">Find a Jobs </NavLink></li>
                                            <li><NavLink to="/about" activeClassName="active-tab">About</NavLink></li>
                                            <li><a>Page</a>
                                                <ul className="submenu">
                                                    <li><NavLink to="/blog" activeClassName="active-tab">Blog</NavLink></li>
                                                    <li><NavLink to="/single-blog" activeClassName="active-tab">Blog Details</NavLink></li>
                                                    <li><NavLink to="/job-detail" activeClassName="active-tab">job Details</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="/contact" activeClassName="active-tab">Contact</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>          
                                <div className="header-btn d-none f-right d-lg-block">
                                    <a href="#" className="btn head-btn1">Register</a>
                                    <a href="#" className="btn head-btn2">Login</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </header>
    );
  }
}

export default Header;