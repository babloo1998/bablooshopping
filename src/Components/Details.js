import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../Action';

class Details extends Component {
    constructor(props) {
        super(props);

        console.log("here=====================>",this.props)
        this.state = {
            size: 'Small',
            color: 'Red',
            quantity: 1,
        }
    }


    cartAction  = (e) =>{
        e.preventDefault();
        this.props.history.push("/");
    }

    handleAddToCart = (e) => {
        e.preventDefault();
        let { addProduct } = this.props;
        let { id, name, price, inCart } = this.props.product;
        console.log("AddProduct", addProduct);
        this.setState({
            quantity: this.state.quantity + 1
        });
        addProduct({
            id: id,
            productname: name,
            price: price,
            inCart: inCart,
            quantity: this.state.quantity,
            size: this.state.size,
            color: this.state.color
        });
    }
    render() {
        let { intId, product } = this.props;
        console.log("here================> dsfvbjhb",this.props);
        const { defaultcolor, name, price, image } = product;
        let {id} = this.props.storedProducts;
        return (
        <div className="detail-wrapper">
            <div className='detailspage'>
            <h2>Winery</h2>
                <div className='productdescription'>
                <div className="product-img">
                {
                    this.props.storedProducts.map((item, i) => {
                        if (item.id == intId) {
                            return <div className='productimgcontainer'>
                                {
                                    console.log("Inside div checking color", item.defaultcolor)
                                }
                                {item.defaultcolor === "Yellow" ?
                                    <img className="imageYrb productimg" src={"/Assets/img3.jpg"} alt="yellow" />
                                    : null
                                }
                                {item.defaultcolor === "Blue" ?
                                    <img className="imageYrb productimg" src={"/Assets/img1.jpg"} alt="blue" />
                                    : null
                                }
                                {item.defaultcolor === "Red" ?
                                    <img className="imageYrb productimg" src={"/Assets/img2.jpg"} alt="red" />
                                    : null
                                }
                            </div>
                        }

                    })
                }
                  
                </div>
                <div className="product-desc">
                <h2 className='ProductName'>{name}</h2>
                    {/* <span className='detailsprice'><b>Price:${price}</b></span><br /> */}
                    {/* <strong className='detailscolor'>{defaultcolor}</strong><br /> */}
                    <p className='detailsdescription'><b>Material</b>: 100% Premium Combed Cotton, Single jersey, Pre-washed to impart a softer texture.Airy and perspire-friendly fabric that's best suited for Indian weather. “Proudly Made in India”<br />
                        <b>Fit Type</b>: Unisex Regular Fit<br />
                        <b>T-Shirt Colour </b>: {defaultcolor}<br />
                        <b>Sleeve Type </b>: Half<br />
                        <b>Occasion </b>: Classy Casual and Daily Wear. Good to go for any casual scene, express your style with these printed unisex t-shirts.
                        Wash Care instructions: Do not bleach. Dry in shade. Wash with similar colours. Machine wash cold.
                                    All designs are printed with skin-friendly chemicals and are tested for up to 10 washes, no bleeding.</p>
                    <span className='detailsprice'> <b>${price}</b> <br /> Including All Taxes</span><br />
                    <button type='button' className='btn add-btn cart-back' onClick={this.handleAddToCart}>ADD TO CART</button> 
                    <button type='button' className='btn add-btn cart-back' onClick={this.cartAction}>Buy More</button>        
                </div>
                    </div>
                {/* // </div> */}
                {/* // }) */}
            </div>
        </div>
        );
        
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const intId = parseInt(id);
    const product = state.productReducer.storeProducts.find(item => item.id === intId);
    return {
        cart: state.cartreducer,
        storedProducts: state.Reducer.storeProducts,
        images: state.Reducer.images,
        product,
        intId
    }
}
const mapDispatchToProps = (dispatch) => ({
    addProduct: (data) => dispatch(addProduct(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);