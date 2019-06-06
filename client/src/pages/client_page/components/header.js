import React, { Component } from 'react';
import IconCart from '../../../TuanComponents/IconCart';
import {  NavLink } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <header className="site-header">
                <div className="container">
                    <div className="row">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark nav-change">
                           <li><NavLink class="navbar-brand" to="/"><img src="../images/logo.png" width="160" alt="Logo"/></NavLink></li>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav ml-auto menu-change">
                                    <li><NavLink to="/" className="link">home</NavLink></li>
                                    <li><NavLink to="/menu" className="link">menu</NavLink></li>
                                    <li><NavLink to="/blog" className="link">blog</NavLink></li>
                                    <li><NavLink to="/about" className="link">about</NavLink></li>                                 
                                    <li><NavLink to='/contact' className="link">contact</NavLink></li>
                                    <li><NavLink to='/payment'><IconCart /></NavLink></li>
                                    {/* <li><NavLink to ="/login" className="fa fa-user" style={{color:'white'}} aria-hidden="true"></NavLink></li> */}
                               
                                </ul>
                            </div>
                            </nav>
                       
                    </div>
                </div>
          </header>
        )
    }
}
export default Header;