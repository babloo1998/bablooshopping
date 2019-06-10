import React, { Component } from 'react';
import {connect} from 'react-redux';
import {clearProducts} from '../Action';
class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {   
          
         }
    }

    clearAll = (e) => {
        let { clearProducts } = this.props;
        
        clearProducts();
    }

    handleClick = () =>{
        this.props.history.push('/');
        this.clearAll();
    }

    render() { 
        let {cart} = this.props;
        let itemKeys = Object.keys(cart);
        console.log('submit',this.props.cart);
        return ( 
            <div>
                <div className="submitted">
                <span><img className="green-tick" src="https://banner2.kisspng.com/20180315/djw/kisspng-check-mark-computer-icons-clip-art-green-tick-mark-5aab1c5116d0a0.2098334515211633450935.jpg" alt="tick" /></span>
                    <h4>Thank you...</h4>
                    <h5>Your order has been placed.</h5>

                    <button type="button" className="btn btn-danger btn-continue" 
                    onClick={this.handleClick}>CONTINUE SHOPPING</button>
                </div>

                <div className="billDetailsSubmit">
                    <h5 className="your-details-head">Your Details</h5>
                   <p className="user-details">{ itemKeys.map(item =>
                    <>
                      {item} : <p className="cart-item">{cart[item]}</p>
                    </>
                   )
                   }</p>
                </div>
            </div>
         );
    }
}
const mapStateToProps =  (state) =>({
    cart : state.BillingAddress.tempData,
    delete: state.shoppingCartReducer,
})

const mapDispatchToProps = (dispatch) => ({
    clearProducts: (data) => dispatch(clearProducts(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Submit);