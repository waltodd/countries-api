import axios from "axios";

export default axios.create({
  baseURL: "https://restcountries.com/v2",
  headers: {
    "Content-type": "application/json"
  }
});
