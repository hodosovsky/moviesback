const axios = require("axios");

const getPeopleController = async (req, res, next) => {
  const { person_id } = req.params;

  const people = await axios.get(
    `person/${person_id}?api_key=${process.env.API_KEY}`
  );

  res.json(people.data);
};

const getPopularPeopleController = async (req, res, next) => {
  const { page = 1 } = req.query;
  console.log("page:", page);

  const popular = await axios.get(
    `person/popular?page=${page}&api_key=${process.env.API_KEY}`
  );

  res.json(popular.data);
};

module.exports = { getPeopleController, getPopularPeopleController };
