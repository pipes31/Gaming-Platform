import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "623b8011a23940499b12390f094b5194",
  },
});
