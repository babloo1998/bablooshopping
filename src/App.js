import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import './Components/Cardstyle.css';
// import Cartlogo from '../public/Assets/cart.svg';
import Cart from './Components/Cart';
import Addtocart from './Components/AddToCart/Addtocart';
import Details from './Components/Details';
import Form from './Components/form/form';
import Invoice from './Components/invoice'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
          <Route exact path="/" component={Cart} />
          <Route path="/details/:id" component={Details} />
          <Route path="/addtocart" component={Addtocart} />
          <Route path="/Checkout" component={Form} />
          <Route path="/Invoice" component={Invoice} />
        </Switch>
      </div>
    );
  }
}

export default App;
