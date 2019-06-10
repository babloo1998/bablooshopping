const cartreducer = (state = [], action) => {

    let cartproducts = state;
    switch (action.type) {
        case 'ADD_TO_CART': {
            console.log("Action data id ", action.data.id);
            console.log("State", state);
            console.log("cartproductssssss----->", cartproducts);
            cartproducts.forEach(cp => {
                if (cp.id === action.data.id) {
                    cp.quantity += 1;
                    action.data.inCart = 1;
                }

            });

            let temp = action.data;
            console.log("Cart Reducer Data", action.data);
            if (action.data.inCart === 1) {
                return cartproducts
            }
            else {
                return [...state, temp];
            }

        }
        case 'CLEAR_PRODUCTS': {
            state.length = 0;
            return [];
        }
        case 'DELETE_PRODUCT': {
            console.log('To Be Deleted Product ID = ', action.id);
            console.log('Item ID', state.id);
            const itemsFiltered = state.filter(item => item.id !== action.id);
            console.log('itemsFiltered = ', itemsFiltered);
            return itemsFiltered;
        }
        case 'UPDATE_CART': {

        }

        case 'INCREMENT': {
            const findItem = state.find(item => item.id === action.data.id);
            findItem.quantity += 1;
            return state.map(item => {
                if (item.id === action.data.id) {
                    console.log('inside if block of state map', action.id)
                    return findItem
                }
                return item;
            })
        }
        case 'DECREMENT': {
            const findItem = state.find(item => item.id === action.data.id);
            findItem.quantity -= 1;
            return state.map(item => {
                if (item.id === action.data.id) {
                    console.log('inside if block of state map', action.id)
                    return findItem
                }
                return item;
            })
        }
        case 'SIZE_UPDATE': {
            console.log('size update reducer', action.data.id);
            const findItem = state.find(item => item.id === action.data.id);
            findItem.size = action.data.size;
            console.log('redux state object', state);
            console.log('action inside size update', action)
            return state.map(item => {
                if (item.id === action.data.id) {
                    console.log('inside if block of state map', action.data.id)
                    return findItem
                }
                return item;
            })
        }

        case 'COLOR_UPDATE': {
            console.log('size update reducer', action.data.id);
            const findItem = state.find(item => item.id === action.data.id);
            findItem.color = action.data.color;
            console.log('redux state object', state);
            console.log('action inside size update', action)
            return state.map(item => {
                if (item.id === action.data.id) {
                    console.log('inside if block of state map', action.data.id)
                    return findItem
                }
                return item;
            })
        }
        default: {
            return state
        }
    }
}

export default cartreducer