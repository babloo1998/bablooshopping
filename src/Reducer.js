import {storeProducts, detailProduct, images, color} from './Components/Data';

const initialState = {storeProducts, detailProduct, images, color}

const Reducer = (state = initialState, action) =>{
    switch(action.type) {
        case 'PRODUCT_INFO': {
            console.log("Data received by Reducer-->",action);
            return { state };
        }
        default: {
            return state;
        }
    }
}

export default Reducer;