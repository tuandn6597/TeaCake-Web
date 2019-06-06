import React, { Component } from 'react';
import {  Route,Switch } from 'react-router-dom';
import PrivateRoute from "./components/private-route/PrivateRouter";
import Home from './pages/client_page/home';
import Admin from './pages/admin/administrator';
import Collection from './pages/client_page/collection';

import BlogPage from './pages/client_page/blogpage';
import About from './pages/client_page/about';
import Order from './TuanComponents/Order';
import Header from './pages/client_page/components/header';
import store from './store';
import { getTypeProduct } from './actions/typeProduct';
import Payment from './TuanComponents/payment';

  
import {withRouter} from 'react-router'
import Dashboard from './components/dashboard/Dashboard';
import Contact from './pages/client_page/components/contact';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillMount(){
        store.dispatch(getTypeProduct());
    }
    render() { 
      const arr=['/dashboard','/login','/register'];
        return ( 
            <div>
                {arr.indexOf(this.props.location.pathname) < 0 && <Header/>}
          
           
           
            
            <Route exact path="/" component = {Home}/>
            {/* <Route exact path="/admin" component = {Admin}/> */}
            <Route exact path="/menu" component = {Collection}/>
            <Route exact path="/blog" component = {BlogPage}/>
            <Route exact path ="/about" component ={About}/>
            <Route exact path ="/contact" component ={Contact}/>
            <Route exact path ="/order" component ={Order}/>
            <Route exact path ="/payment" component ={Payment}/>
            <Route exact path ="/login" component ={Login}/>
            <Route exact path ="/register" component ={Register}/>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        
            
        </div>
           
         );
    }
}
 
export default withRouter(App);