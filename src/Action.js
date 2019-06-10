export const cartAction = (data) =>{ 
    console.log("---Shopping Cart---");
    console.log('Data received by  Action--->', data);
    return{
            type: 'PRODUCT_INFO',
            data
        }
}

export const addProduct = (data) =>{ 
    console.log("---Shopping Cart---");
    console.log('Data received by addProduct Action--->', data);
    return{
            type: 'ADD_TO_CART',
            data
        }
}
export const clearProducts = (data) =>{
    console.log("---Shopping Cart---");
    console.log('Data received by clearProducts Action--->', data);
    return {
        type : 'CLEAR_PRODUCTS',
        data
    }
}

export const deleteProduct = (id) =>{
    console.log("---Shopping Cart---");
    console.log('Data received by deleteProduct Action--->', id );
    return{
        type : 'DELETE_PRODUCT',
        id
    }
}

export const increment = (data) =>{
    console.log("---Shopping Cart---");
    console.log('Data received by increment quantity Action--->', data);
    return {
        type : 'INCREMENT',
        data
    }
}

export const decrement = (data) =>{
    console.log("---Shopping Cart---");
    console.log('Data received by increment quantity Action--->', data);
    return {
        type : 'DECREMENT',
        data
    }
}
export const updatecart = (id) =>{
    console.log("---Shopping Cart---");
    console.log('Data received by deleteProduct Action--->', id );
    return{
        type : 'UPDATE_CART',
        id
    }
}

export const updatesize = (data) =>{
    console.log("---Shopping Cart---");
    console.log('Data received by update Action--->', data );
    return{
        type : 'SIZE_UPDATE',
        data
    }
}

export const billingAction = (data) => {
    console.log("billing Action Called");
    return {
      type: "CHECKOUT",
      data
    }
  }
  export const productInfo = (data) => {
    console.log("---Shopping Cart---");
    console.log('Data received by productInfo Action--->', data);
    return {
    type: 'PRODUCT_INFO',
    data
    }
    }

export const updatecolor = (data) =>{
    console.log("---Shopping Cart---");
    console.log('Data received by update Action--->', data );
    return{
        type : 'COLOR_UPDATE',
        data
    }
}