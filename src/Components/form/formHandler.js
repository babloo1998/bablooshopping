const initialValues = {
    username: "",
    email: "",
    city: "",
    address: "",
    zipcode: "",
    country : "India"
}
const validateEmail = (value) => {
    let error;
    if (!value) {
        error = 'Email Field is blank';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const validateName = (value) => {
    let error;
    if (!value) {
        error = 'Name field is blank';
    }
    return error;

}
const validateZip=(value)=>{
    let error;
    if (!value){
        error='Pincode is blank';
    }else if (value.length !== 6){
        error="Invalid pincode"
    }
    return error;
}

export {
    initialValues,validateName,validateEmail,validateZip
}