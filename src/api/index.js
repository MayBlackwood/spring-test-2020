import axios from "axios";

import { API_URL } from "../config";

export const getCardsData = () =>
  axios
    .get("/tz20/list.json")
    .then((res) => {
      return res.data.data.map((item) => {
        return {
          id: item.id,
          name: item.name,
          shortInfo: item.shortInfo,
          more: item.more,
          disabled: false,
          deletedDate: null,
        };
      });
    })
    .catch((error) => console.log(error));

export const getFullPost = (path) => {
  if (!path) {
    return {};
  }

  return axios
    .get(`/tz20${path}`)
    .then((res) => ({ ...res.data, pic: `${API_URL}${res.data.pic}` }))
    .catch((error) => {
      console.log(error);
    });
};
