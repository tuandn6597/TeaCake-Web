import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../../../actions/authActions';
 class Navbar extends Component {
     handleLogout=(e)=>{
        e.preventDefault();
        this.props.logoutUser();
     }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <div className="navbar-toggle">
                            <button type="button" className="navbar-toggler">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                 
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navigation">
                       
                        <ul className="navbar-nav">
                           
                            <li className="nav-item btn-rotate dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="nc-icon nc-settings-gear-65"></i>
                                    <p><span className="d-lg-none d-md-block">Some Actions</span></p>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="" onClick={this.handleLogout}>Logout</a>
                                  
                                </div>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>
    )
}}
const mapDispatchToProps=dispatch=>({
    logoutUser:()=>dispatch(logoutUser())
})
export default connect(null,mapDispatchToProps) (Navbar)

