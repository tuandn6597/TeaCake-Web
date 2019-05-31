import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" data-color="white" data-active-color="danger">
                <div className="logo">
                    <a href="/admin" className="simple-text logo-mini">
                        <div className="logo-image-small">
                            <img src="/images/logo-small.png" alt="Logo" />
                        </div>
                    </a>
                    <a href="/admin" className="simple-text logo-normal">Admin Page</a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li >
                            <Link to={`/admin`} className="nav-link">
                                <i className="nc-icon nc-bank"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="active ">
                            <Link to={'/admin/product'} className="nav-link">
                                <i className="nc-icon nc-app"></i>
                                <p>Products</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/admin/blog'} className="nav-link">
                                <i className="nc-icon nc-book-bookmark"></i>
                                <p>Blogs</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/admin/nhanvien'} className="nav-link">
                                <i className="nc-icon nc-single-02"></i>
                                <p>Employee</p>
                            </Link>
                        </li>
                        <li>
                            <a href="./user.html">
                                <i className="nc-icon nc-book-bookmark"></i>
                                <p>User Profile</p>
                            </a>
                        </li>
                        <li>
                            <a href="./tables.html">
                                <i className="nc-icon nc-tile-56"></i>
                                <p>Table List</p>
                            </a>
                        </li>
                        <li>
                            <a href="./typography.html">
                                <i className="nc-icon nc-caps-small"></i>
                                <p>Typography</p>
                            </a>
                        </li>
                        <li className="active-pro">
                            <a href="./upgrade.html">
                                <i className="nc-icon nc-spaceship"></i>
                                <p>Upgrade to PRO</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;