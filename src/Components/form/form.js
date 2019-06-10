import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from "formik/dist/index";
import { billingAction } from "../../Action";
import { initialValues, validateName, validateEmail, validateZip } from "./formHandler";
import Swal from 'sweetalert2';

class FieldLevelValidationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            update: false,
            total: 0,
          
        }
    }

    componentDidMount(){
        this.calTotal();
    }

    componentWillReceiveProps(){
        this.calTotal();
    }    

  
    
    calTotal = (e) =>{
        let totAmount = 0;
        console.log("thish is meee");
        this.props.cart.map((item, i) =>{
               totAmount = totAmount+ (item.price*item.quantity)
        }
        
        )
        this.setState({
            total:totAmount
        })
    }



    handleSubmit = (values, { resetForm } , e) => {
        const { billingAction } = this.props;
        billingAction(values);
        resetForm();
        this.props.history.push('/invoice');
        Swal.fire(
            'Order Placed!',
            'Your order have been placed!',
            'success'
          );
    }

    handleShippingAddressCheckbox = (setFieldValue, values) => {
        Object.keys(values).map(item => {
            setFieldValue(['shipping_' + item], values[item]);
        })
    }

    render() {
       
        return (
            <>


<div className="cart tableWrapper">

{/* <div className="logo">
    <span className='description'>Wines for web developers since 1999</span>
</div> */}
</div>

<h2 className="shopHeading">Product-Detail</h2>
<div className='producttable'>
<table class="table table-bordered carttable">
    <thead>
        <tr>
        <th scope="col">PRODUCT IMAGE</th>
            <th scope="col">ITEM</th>
            <th scope="col">QTY</th>
            <th scope="col">SIZE</th>
            <th scope="col">COLOR</th>
            <th scope="col" colspan="2">PRICE</th>
        </tr>
    </thead>
    <tbody>
        {
            this.props.cart.map((item, i) =>
                <tr key={i}>
                    <td className="imageTd">
                        {item.color === "Yellow" ?
                            <img className="imageYrb" src={"Assets/img3.jpg"} alt="yellow" className="cart-img" />
                            : null
                        }
                        {item.color === "Blue" ?
                            <img src={"Assets/img1.jpg"} alt="blue" className="cart-img" />
                            : null
                        }
                        {item.color === "Red" ?
                            <img src={"Assets/img2.jpg"} alt="red" className="cart-img" />
                            : null
                        }
                    </td>
                    <td className="tableData">{item.productname}</td>
                    <td className="tableData quantity-btn">
                        {this.state.update ?
                            item.quantity <= 1 ?
                                <button disabled className="addSubBtn quantityselection" type="button">-</button>
                                :
                                <button className="addSubBtn quantityselection" type="button" onClick={() => this.handleSubtractQuantity(item.id, item.price)}>-</button>

                            : null
                        }
                        <span className="qty">
                            {item.quantity}
                        </span>
                        {this.state.update ?
                            item.quantity < 10 ?
                                <button className="addSubBtn quantityselection" type="button" onClick={() => this.handleAddQuantity(item.id, item.price)}>+</button>
                                :
                                <button className="addSubBtn quantityselection" type="button" disabled>+</button>
                            : null
                        }
                    </td>
                    <td>
                        {
                            !this.state.update ? item.size :
                            this.state.update ?
                                <select id={item.id} name="Size" onClick={this.handleChangeSize} className='sizeselection'>
                                    <option value="Small">Small</option>
                                    <option value="Middle">Middle</option>
                                    <option value="Large">Large</option>
                                </select> : null
                        }
                    </td>
                    <td>
                        {!this.state.update ? item.color :
                            this.state.update ?
                                <select id={item.id} name="Color" onClick={this.handleChangeColor} className='sizeselection'>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Yellow">Yellow</option>
                                </select> : null
                        }
                    </td>
                    <td>${item.price * item.quantity}</td>
                    {
                        this.state.update ?
                            <td><i className="far fa-trash-alt" style={{color: 'red'}} onClick={() => this.deleteCartProduct(item.id)}></i></td> : null
                    }

                </tr>
            )
        }
    </tbody>
</table>
<div className="order-total">
<div className="total-detail">
    <p>Price:<span>${this.state.total}</span></p>
    <p>GST<important>(5%)</important>:<span>${this.state.total*0.05}</span></p>
    <p>Total Amount:<span>{this.state.total+(this.state.total*0.05)}</span></p>   
   </div>           
</div>
</div>

            <Formik
                initialValues={initialValues}
                onSubmit={this.handleSubmit}
                render={({ errors, setFieldValue, values }) => (
                    <div className="checkOutShop">
                        <Form className="form-details">
                            <h2 className="checkoutHead">Checkout</h2>
                            <h4 className="checkoutHead">Your Details</h4>
                            <fieldset className="billing">
                                <h5 className="billHead">Billing</h5>
                                <div>
                                    <label className="checkLabel">Name:</label>
                                    <Field
                                        className="input-fields"
                                        name="username"
                                        validate={validateName}
                                    />
                                    {errors.username &&

                                        <span className="errors">{errors.username}</span>

                                    }
                                </div>
                                <div>
                                    <label className="checkLabel">Email:</label>
                                    <Field
                                        className="input-fields"
                                        name="email"
                                        validate={validateEmail}
                                    />
                                    {
                                        errors.email &&

                                        <span className="errors">{errors.email}</span>

                                    }
                                </div>
                                <div>
                                    <label className="checkLabel">City:</label>
                                    <Field
                                        className="input-fields"
                                        name="city"
                                    />
                                </div>
                                <div>
                                    <label className="checkLabel">Address:</label>
                                    <Field
                                        className="input-fields"
                                        name="address"
                                    />
                                </div>
                                <div>
                                    <label className="checkLabel">Zipcode:</label>
                                    <Field
                                        className="input-fields"
                                        name="zipcode"
                                        validate={validateZip}

                                    />
                                    {
                                        errors.zipcode &&

                                        <span className="errors">{errors.zipcode}</span>

                                    }
                                </div>
                                <div>
                                    <label className="checkLabel">Country:</label>
                                    <Field component="select" name="country" className="country">
                                        <option value="India">India</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="USA">USA</option>
                                    </Field>
                                </div>
                            </fieldset>

                            <div className="billSame">
                                <span>Same as Billing</span>
                                <input
                                    type="checkbox"
                                    onChange={(e) => this.handleShippingAddressCheckbox(setFieldValue, values)}
                                    className="checkBilling"
                                />
                            </div>

                            <fieldset className="shipping">
                                <h5 className="shipHead">Shipping</h5>
                                <div>
                                    <label className="checkLabel">Name:</label>
                                    <Field
                                        className="input-fields"
                                        name="shipping_username"
                                        validate={validateName}
                                    />
                                    {errors.username &&
                                        <span className="errors">{errors.username}</span>

                                    }
                                </div>
                                <div>
                                    <label className="checkLabel">Email:</label>
                                    <Field
                                        className="input-fields"
                                        name="shipping_email"
                                        validate={validateEmail}
                                    />
                                    {
                                        errors.email &&

                                        <span className="errors">{errors.email}</span>

                                    }
                                </div>
                                <div>
                                    <label className="checkLabel">City:</label>
                                    <Field
                                        className="input-fields"
                                        name="shipping_city"
                                    />
                                </div>
                                <div>
                                    <label className="checkLabel">Address:</label>
                                    <Field
                                        className="input-fields"
                                        name="shipping_address"
                                    />
                                </div>
                                <div>
                                    <label className="checkLabel">Zipcode:</label>
                                    <Field
                                        className="input-fields"
                                        name="shipping_zipcode"
                                        validate={validateZip}

                                    />
                                    {
                                        errors.zipcode &&

                                        <span className="errors">{errors.zipcode}</span>

                                    }
                                </div>
                                <div>
                                    <label className="checkLabel">Country:</label>
                                    <Field component="select" name="country" className="country">
                                        <option value="India">India</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="USA">USA</option>
                                    </Field>
                                </div>
                            </fieldset>
                            <button type="submit" className="btn btn-danger btn-checkout">
                                Submit
                            </button>
                        </Form>
                    </div>

                    
                )}

            />
                   
            </>


        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartreducer,
    storedProducts: state.Reducer.storeProducts,
})

const mapDispatchToProps = {
    billingAction
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldLevelValidationForm);