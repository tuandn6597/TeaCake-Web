import React, { Component } from 'react';
import MenuLeft from './MenuLeft';

import ListProduct from './ListProduct';
import InfoCart from './InfoCart';
import {connect} from 'react-redux';
import { getTypeProduct } from '../actions/typeProduct';
//
import {  Element , animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import InfoCartResponsive from './InfoCartResponsive';
import { addToCart } from '../actions/cart';
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillMount(){
        if(this.props.location.product){
         
          this.props.addCart(this.props.location.product.name,this.props.location.product.price,1,this.props.location.product._id);
           
        }
    }
    render() { 
     
        console.log(this.props.location.product);

        return ( 
            <div>
              
        <div className="container">
           
          
            <div className="row order-1" >
                <div className="col-sm-3 menu-left">
                    <MenuLeft />

                </div>
                <div className="col-lg-5">
                {this.props.types.map((type,index)=>(
                     <Element name={`block${index+1}`} className="element">
                   <div key={index}> 
                    <h5>{index+1}.{type.type_product}</h5>
                    <ListProduct products={type.products}/>
                    </div>
                    </Element>
                ))}
                   
                </div>
                <div className="col-sm-4 info-cart">
                    <InfoCart />
                </div>
            </div>
            
            </div>
            <div className="row res">
                    <InfoCartResponsive />
            </div>
        </div> );
    }
}
 const mapDispatchToProps=dispatch=>({
     getType:()=>dispatch(getTypeProduct()),
     addCart:(name,price,amount,_id)=>dispatch(addToCart(name,price,amount,_id))
 })
 const mapStateToProps=state=>({
    types:state.types
})
export default connect(mapStateToProps,mapDispatchToProps)(Order);