import { combineReducers } from 'redux';
import { createStore } from 'redux';
import Reducer from './Reducer';
import cartreducer from './cartreducer';
import {BillingAddress} from './BillingAddress';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    productReducer,
    Reducer,
    cartreducer,
    BillingAddress
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
