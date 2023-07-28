// import {signOut} from "next-auth/react";

import axios from "axios";

function http(options) {
  const client = axios.create(options);

  const request = async (options) => {
    console.log(options);
    const onError = (error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("API Error", error.response.data);

        switch (error.response.status) {
          case 401:
            // signOut();
            // document.location = "/";
            break;
          default:
            break;
        }
      } else if (error.request) {
        // The request was made but no response was received
        // This might occur when the api server is down
        // We can route the user to 500 page here
        console.error("Network Error", error.request);
      } else {
        // Something else happened in making the request that triggered an error
        // We can route the user to 400 with a message here
        console.error("Client Error", error.message);
      }

      return Promise.reject(error.response || error.message);
    };

    try {
      const response = await client(options);
      return response.data;
    } catch (error) {
      return onError(error);
    }
  };

  return {
    get: async (url, params = {}) => {
      return request({
        method: "GET",
        url,
        params,
      });
    },

    post: async (url, data = {}) => {
      return await request({
        method: "POST",
        url,
        data,
      });
    },

    put: async (url, data = {}) => {
      return await request({
        method: "PUT",
        url,
        data,
      });
    },

    del: async (url) => {
      return await request({
        method: "DELETE",
        url,
      });
    },
  };
}

const nextApiClient = http({
  baseURL: process.env.NEXT_PUBLIC_NEXT_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export default nextApiClient;
