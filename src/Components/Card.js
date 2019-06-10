import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Carddata from './Carddata';
import {addProduct} from '../Action';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickid:1,
            size: 'Small',
            color: 'Red',
            quantity: 1,
            // selectedImage: 'blue',
            selectedColor: props.product.defaultcolor,
            animate: true
        }
    }
    gettingimgid =  (e) => {
        console.log("details id------>", e.target.id)
        this.setState({
            clickid : e.target.id
        })
        console.log("image -- id",this.state.clickid);
    }
    handleChangeSize = (e) => {
        console.log("Selected size", e.target.value);
        this.setState({
            size: e.target.value
        })

    }
    handleChangeColor = (e) => {
        let { name } = this.props.product;
        let selectedRadio = name + " radio";
        console.log("radio button ", e.target.value);
        if (e.target.name === selectedRadio) {
            this.setState({
                selectedColor: e.target.value,
                animate: true,
                color:e.target.value
            })
        }
        this.setState({
            [e.target.name]: e.target.value,
        })
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

        let { product } = this.props;
        let imageRender = this.props.images;
        console.log("helooooooooooooooooo============>",imageRender);
        let imageKeys = Object.keys(this.props.images[0]);
        return (
            <div class="col-9 mx-auto col-md-6 col-lg-4 my-3 cardcontainer">
                <div class="card">
                    <div className="img-container p-5">
                        <Link to={`/details/${product.id}`}>
                            {
                                imageKeys.map((item, i) => {
                                    return (
                                        this.state.selectedColor === item ?
                                            <div key={i} className="image container" onClick={this.gettingimgid}>
                                                <img src={imageRender[0][item]} alt="shirt" className="card-img-top productimage"  />
                                                    {/*                                                
                                                    <div className="middle">
                                                    <div className="text">VIEW</div>
                                                </div> */}
                                            </div> : null

                                    )
                                })
                            }
                        </Link>
                        <div className={`${product.name} buttonNav`}>
                            <Carddata
                                name={product.name}
                                imageKeys={imageKeys}
                                handleChangeSize={this.handleChangeSize}
                                handleChangeColor={this.handleChangeColor}
                                handleAddToCart={this.handleAddToCart}
                            />
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center">{product.name}</p>
                        <p>${product.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("images", state.Reducer.images);
    return {
        storedProducts: state.Reducer.storeProducts,
        images: state.Reducer.images
    }
}
const mapDispatchToProps = (dispatch) => ({
    addProduct : (data) => dispatch(addProduct(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Card);
