import React, { Component } from 'react';

import Slider from './components/slider';

import Opening from './components/opening';
import BlogContent from './components/blog/blogContent';
import Contact from './components/contact';
import MenuAbout from './components/about/menu';
import CustomerSay from './components/about/customerSay';
import AllMenu from './components/collection/menuAll';
class Home extends Component{
    render(){
        return(
            <div className="site-wrapper">
               
                <Slider/>
                <AllMenu />
                
               
                <BlogContent/>
                <Opening/>
                <MenuAbout/>
                <CustomerSay/>
                <Contact/>
            </div>
        )
    }
}
export default Home;