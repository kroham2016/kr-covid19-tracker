import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchTotalData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {

        const {
            data: {
                confirmed,
                recovered,
                deaths,
                lastUpdate
            }
        } = await axios.get(changeableUrl);
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };

    } catch (error) {
        return error;
    }
};

export const fetchDailyData = async () => {
    try {

        let response = await axios.get(`${url}/daily`);
        const modifiedData = response.data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData;

    } catch (error) {
        return error;
    }
}

export const fetchCountries = async () => {
    try {

        let response = await axios.get(`${url}/countries`);
        return (response.data.countries.map(country => country.name));

    } catch (error) {
        return error;
    }
}