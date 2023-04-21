const axios = require("axios");
// import axios from "axios";

axios.defaults.baseURL = " https://api.themoviedb.org/3/";

const getTrandingMoviesController = async (req, res, next) => {
  const { page = 1, period = "day", type = "all" } = req.query;

  const movies = await axios.get(
    `trending/${type}/${period}?&page=${page}&api_key=${process.env.API_KEY}`
  );
  res.json(movies.data);
};

const getMovieController = async (req, res, next) => {
  const { movie_id } = req.params;
  const { language = "en-US" } = req.query;
  //   page = +page;
  const movie = await axios.get(
    `movie/${movie_id}?api_key=${process.env.API_KEY}&language=${language}`
  );

  res.json(movie.data);
};
const getActorsController = async (req, res, next) => {
  const { movie_id } = req.params;
  const { language = "en-US" } = req.query;
  //   page = +page;
  const movie = await axios.get(
    `movie/${movie_id}/credits?api_key=${process.env.API_KEY}&language=${language}`
  );

  res.json(movie.data);
};

const getTrailersController = async (req, res, next) => {
  const { movie_id } = req.params;
  const { language = "en-US" } = req.query;
  //   page = +page;
  const movie = await axios.get(
    `movie/${movie_id}/videos?api_key=${process.env.API_KEY}&language=${language}`
  );

  res.json(movie.data);
};

const getMovieReviewsController = async (req, res, next) => {
  const { movie_id } = req.params;
  const { page = 1, language = "en-US" } = req.query;
  //   page = +page;
  const movie = await axios.get(
    `movie/${movie_id}/reviews?api_key=${process.env.API_KEY}&language=${language}&page=${page}`
  );

  res.json(movie.data);
};

module.exports = {
  getTrailersController,
  getTrandingMoviesController,
  getMovieController,
  getMovieReviewsController,
  getActorsController,
};
