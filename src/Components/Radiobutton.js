import React, { Component } from 'react';
import { connect } from 'react-redux';


class Radiobutton extends Component {
    
    render() {
        const { name, colorButtonToggle, imageKeys, handleChangeColor} = this.props;
        let checkmarkRadioStyle = {
            "background": imageKeys
        }

        console.log("defaullt color===========>",this.props.storedProducts);

        console.log('checkmark readio style',checkmarkRadioStyle)
        return (
            <div className="radio">
                <ul>
                    {
                        checkmarkRadioStyle.background.map((item,i) => {
                                return(
                                    <li key={i} onClick={colorButtonToggle}>
                                        <label className="radio-container">
                                        <input
                                            className="radio-button"
                                            type="radio"
                                            onClick={(e) => handleChangeColor(e)}
                                            value={item}    
                                            name={`${name} radio`}/>
                                            {console.log("ravi=============>",this.props.storedProducts[i].image)}
                                            {console.log("colorrrr=============>",i,this.props.storedProducts[i].defaultcolor)}
                                            <span style = {{backgroundColor: this.props.storedProducts[i].defaultcolor}} className="checkmark"></span>
                                        </label>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    storedProducts: state.Reducer.storeProducts,
})

export default connect(mapStateToProps)(Radiobutton);