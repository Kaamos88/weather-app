import axios from "axios";

const KEY = "e62298e9a40345b39db162255222607";

export default axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
  params: {
    key: KEY,
  }
})