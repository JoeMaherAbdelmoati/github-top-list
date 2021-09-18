import axios from "axios";

export const httpCall = ({baseURL, data, url, params}) => {
  return axios({baseURL, data, url, params}).catch((err) => {
    throw err
  });
};