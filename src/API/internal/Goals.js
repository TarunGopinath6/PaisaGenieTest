import axios from 'axios';
import QueryString from 'qs';

// axios.defaults.headers.common["API_KEY"] = "915d5866ebcdf53684fd37128a"

const baseURL = "https://bob-aa-server.onrender.com";

class API {

  async getGoals(phone) {

    try {
      const response = await axios.get(baseURL + '/info/' + phone);

      return { "code": response.status, "data": response.data };

    } catch (error) {

      if (error.response) {
        // Request made and server responded
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        return { "code": error.response.status, "data": error.response.data }
      } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
        return { "code": -1, "data": error.request }
      } else {
        // Something happened in setting up the request that triggered an Error
        return { "code": -2, "data": error.message }
      }
    }

  }

  async setGoals(phone, value1, value2, value3, value4) {
  
    try {
      const response = await axios.post(baseURL + '/info/' + phone,
        QueryString.stringify({
          "action": value1,
          "category": value2,
          "compare": value3,
          "value": value4
        }), {
          headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
          }
        }
      );

      return { "code": response.status, "data": response.data };

    } catch (error) {

      if (error.response) {
        // Request made and server responded
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        return { "code": error.response.status, "data": error.response.data }
      } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
        return { "code": -1, "data": error.request }
      } else {
        // Something happened in setting up the request that triggered an Error
        return { "code": -2, "data": error.message }
      }
    }

  }
}

export default API;