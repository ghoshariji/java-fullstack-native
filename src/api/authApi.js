import axios from "../api/index"

export const login = async (payload) => {
    try {
        const data = await axios.post("/login", { payload });
        return data;
    } catch (error) {
        console.log('Error' + error)
    }
}

export const signup = async (payload) => {
    try {
        const data = await axios.post("/register", { payload });
        return data;
    } catch (error) {
        console.log('Error' + error)
    }
}