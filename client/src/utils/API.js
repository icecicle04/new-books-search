import axios from "axios";

const googleSearchAPI = "https:www.googleapis.com/books/v1/volumes?q=";

export default {
  getBook: function (term) {
    return axios.get(googleSearchAPI + term);
  },
  getAllBooks: function () {
    return axios.get("/api/books");
  },
};
