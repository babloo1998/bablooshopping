import React, { Component } from 'react';
import {connect} from 'react-redux';
import { clearProducts } from '../Action';

class Invoice extends Component {
    constructor(props) {
    super(props);
    this.state = { 
    }
}

    emptycart = (e) => {
    let { clearProducts } = this.props;
    clearProducts();
    }

    handleClick = () =>{
    this.props.history.push('/');
    this.emptycart();
    }

render() { 
            let {cart} = this.props;
            let itemKeys = Object.keys(cart);
    return ( 
        <>
        <h2>Order Summary</h2>
        <div className="invoice">
        <div className="billDetailsSubmit">
        <p className="user-details">{ itemKeys.map(item =>
        <div className="user-detail">
         <span>{item}</span> : <span className="cart-item">{cart[item]}</span>
        </div>
        )
        }</p>
        </div>
        </div>
        </>
            );
        }
    }
const mapStateToProps = (state) =>({
cart : state.BillingAddress.tempData,
delete: state.cartreducer,
})

const mapDispatchToProps = (dispatch) => ({
clearProducts: (data) => dispatch(clearProducts(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Invoice);