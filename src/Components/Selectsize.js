import React , { Component } from 'react';


class SelectSize extends Component{
    render(){
        let {handleChangeSize} = this.props;
        return(
            <select onChange={handleChangeSize} className='sizeselection'>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
        )
    }
}

export default SelectSize;