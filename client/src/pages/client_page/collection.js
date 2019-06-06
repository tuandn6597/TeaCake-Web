import React, { Component } from 'react';


import AllMenu from './components/collection/menuAll';
import Contact from './components/contact';
import Service from './components/collection/service';
import Slider from './components/slider';
class Collection extends Component{
    render(){
        return(
            <div className="site-wrapper" style={{backgroundImage: 'url(images/bg_4.jpg)'}}>
               
                <Slider/>
                <AllMenu/>
                <Service/>
                <Contact/>
                
            </div>
        )
    }
}
export default Collection;