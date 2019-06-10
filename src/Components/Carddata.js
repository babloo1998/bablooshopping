import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectSize from './Selectsize';
import Radiobutton from './Radiobutton';
import {ToastsContainer, ToastsStore , ToastsContainerPosition} from 'react-toasts';

class Carddata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorButton: false,
        }
    }
    handleChangeColor =(e) =>{
        e.stopPropagation();
        this.props.handleChangeColor(e);
    }

    onClickHandler = (e) => {
            this.props.handleAddToCart(e);
            ToastsStore.success("Product, successfully added to cart")
    }

    
    colorButton = (e) => {
        e.stopPropagation();
        this.setState({
            displayColorButton: !this.state.displayColorButton
        });
        console.log("CButton", this.state.displayColorButton);

    }
    render() {
        const { name, imageKeys, handleChangeSize, handleChangeColor} = this.props;
        let btn = this.state.displayColorButton ? "displayBlock" : "hideBlock";
        return (
            <div>
                <div className={`${btn} cartmenu`}>
                    <Radiobutton
                        handleChangeColor={(e) => handleChangeColor(e)}
                        name={name}
                        imageKeys={imageKeys}
                        colorButtonToggle={this.colorButton}
                    />
                </div>
                <div>
                    <SelectSize
                        handleChangeSize={(e) => handleChangeSize(e)}
                    />
                </div>
                <div>
                    <button type='button' value='Add To Cart' className='btn add-btn button-card'
                     onClick={this.onClickHandler}>
                        ADD TO CART
                    </button>
                    <ToastsContainer 
                    position={ToastsContainerPosition. BOTTOM_CENTER} 
                    store={ToastsStore} 
                    />
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return{
        storedProducts: state.Reducer.storeProducts
    }
}

export default connect(mapStateToProps)(Carddata);
