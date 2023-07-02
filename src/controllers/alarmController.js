const axios = require("axios");

axios.defaults.headers.common['Authorization'] = '5bfa85d8:a212478ea08355118d100959b187275f'
axios.defaults.baseURL = "https://api.ukrainealarm.com/api/v3/alerts";


const getAlarmController = async (req, res, next) => {
    console.log(axios.defaults.headers.common)
  const alarms = await axios.get();
  
 
  res.json(alarms.data);
};

module.exports = {getAlarmController}