import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetch = async () => {
    try {
        const res = await axios.get(url);
        return res;
        
    } catch (error) {
        console.log(error);
    }
}

export const getDaily = async () => {
    try {
        const res = await axios.get(`${url}/daily`);
        return res;
    } catch(error) {
        console.log(error);
    }
}