import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Cartdata from './Cartdata';
import {Effect} from 'react-notification-badge';
import NotificationBadge from 'react-notification-badge';

class Header extends Component {
    getInitialState() {
        return {
            isMouseInside: false
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            isMouseInside: false
        }
    }
    mouseEnter = () => {
        this.setState({ isMouseInside: true });
    }
    mouseLeave = () => {
        this.setState({ isMouseInside: false });
    }
    render() {
        let cartNotify = this.props.cartNotify
        return (
            <nav>
                <Link to='/addtocart' className="ml-1">
                <span className="notificationBadge">
                    <NotificationBadge count={cartNotify.length || 0} effect={Effect.SCALE}/>
                </span>
                
                <div className='cartimg' onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                    <img src="./Assets/cart.svg" alt="cart" />
                    {this.state.isMouseInside ? <Cartdata /> : null}
                </div>
                </Link>
            </nav>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        cartNotify : state.cartreducer||0,
    }
}

export default connect (mapStateToProps)(Header);
