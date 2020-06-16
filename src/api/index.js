import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetch = async (country) => {
    try {
        let newUrl = url;

        if(country) {
            newUrl = `${url}/countries/${country}`
        } 

        const res = await axios.get(newUrl);
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

export const getCountries = async () => {
    try {
        const response = await axios.get("https://covid19.mathdro.id/api/countries");
        return response.data.countries;
    } catch(error) {
        console.log(error);
    }
}