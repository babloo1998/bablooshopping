export const BillingAddress = (state = [],action) => {
    switch(action.type){
    case "CHECKOUT":{
    console.log("Checkout Reducer Called");
    console.log(action.data);
    let tempData = action.data;
    return {...state,tempData};
    }
    default :{
    return state;
    }
    }
}