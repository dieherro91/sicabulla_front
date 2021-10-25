import axios from "axios";
const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`
}
export const obtenertUsuario= async (successCallback,errorCallback) =>{
    const options = {
        method: 'GET',
        url:'https://sicabullaback.herokuapp.com',
        headers:{'Content-Type': 'application/json',
            Authorization:getToken(),
        }
    }
    await axios.request(options).then(successCallback).catch(errorCallback);
}