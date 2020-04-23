import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        let response  = await axios.get(url);
        return response.data ;
    } catch(error) {

    }
}

export const fetchDailyData = async () => {
    try{
        let response = await axios.get(`${url}/daily`);
        console.log(response);
    } catch{

    }
}