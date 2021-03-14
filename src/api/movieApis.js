import axios from "axios";

const API_ENDPOINT = "http://www.omdbapi.com/";
const GOOAPI_KEY = "2a1864f6";
const API_KEY = "1e32d500";

const api = {
  fetchMovieList: async (page, inputData) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/?apikey=${GOOAPI_KEY}&page=${page}&s=${inputData}`
      );
      if (response.data.Response === "True") {
        return response.data.Search;
      } else {
        throw Error("error");
      }
    } catch (error) {
      return {
        isError: true,
        data: error,
      };
    }
  },
  fetchMovieSelect: async (selectTitle) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/?apikey=${GOOAPI_KEY}&t=${selectTitle}`
      );
      if (response.status === 200) {
        return response.data;
      } else {
        throw Error("error");
      }
    } catch (error) {
      return {
        isError: true,
        data: error,
      };
    }
  },
};

export default api;