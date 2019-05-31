import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import { Alert } from 'reactstrap';
import Sidebar from './components/sidebar';
import {Navbar} from './components/navbar';
import Products from './components/products/products';
import Dashboard from './components/dashboard';
import Employee from "./components/nhanvien/employee"
import Blogs from "./components/blogs/blog";

class Admin extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="admin-page">
                    <Sidebar/>
                    <div className="main-panel">
                        <Navbar/>
                        <Route exact path={'/admin'} component={ Dashboard } />
                        <Route path={'/admin/product'} component={ Products } />
                        <Route path={'/admin/blog'} component={ Blogs } />
                        <Route path={'/admin/nhanvien'} component={ Employee } />
                    </div>
                    
                </div> 
            </BrowserRouter>  
        );
    }
}
export default Admin;