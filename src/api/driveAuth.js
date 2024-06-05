import axios from "../api/index"

export const addDriver = async (payload) => {
    try {
        const data = await axios.post("/api/order/save",payload);
        return data;
    } catch (error) {
        console.log("Error" + error)
    }
}

export const getUserOrderHistory = async(payload) =>{
    try {
        const data = await axios.get(`/api/user/get-data/${payload}`);
        return data;
    } catch (error) {
        console.log("Error " + error)
    }
}