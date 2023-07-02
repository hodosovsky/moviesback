require("dotenv").config();
const axios = require("axios");

axios.defaults.headers.common["Authorization"] = process.env.ALARM_KEY;
axios.defaults.baseURL = "https://api.ukrainealarm.com/api/v3/alerts";

const getAlarmController = async (req, res, next) => {
  console.log(axios.defaults.headers.common);
  const alarms = await axios.get();

  res.json(alarms.data);
};

module.exports = { getAlarmController };
