import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5fcd333a5e954b8aba353efc27d0bc74",
  },
});
