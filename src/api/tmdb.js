import axios from "axios";

const API_KEY = "bcf5fe952a1b639ac67564579cb72556";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY }
});

export const getTrending = (page = 1) =>
  api.get("/trending/movie/week", { params: { page } });

export const getMovies = (page = 1) =>
  api.get("/discover/movie", { params: { page } });

export const getSeries = (page = 1) =>
  api.get("/discover/tv", { params: { page } });

export const searchMovies = (query) =>
  api.get("/search/multi", { params: { query } });

export const getMovieVideos = (id) =>
  api.get(`/movie/${id}/videos`);

export default api;