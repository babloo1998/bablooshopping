import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Header from './Header';


class Cart extends Component {
    render() {
        let { storedProducts } = this.props;
        return (
            <React.Fragment>
                <h2 className="shopheading">Shopping Mart</h2>
                <Header/>
                <div className="py-5">
                    <div>
                        <div className="container">
                            <div className="row">
                                {storedProducts.map(product => {
                                    return <Card key={product.id} product={product} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("store", state.Reducer.storeProducts);
    return {
        storedProducts : state.Reducer.storeProducts,
    }
}

export default connect(mapStateToProps)(Cart);
