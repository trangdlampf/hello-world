import axios from "axios";
var Config = require("./config.json");

const apiClient = axios.create({
  baseURL: Config.api,
  withCredentials: false, //This is the default
  headers: {
    Accept: "application/json"
  }
});

export default {
  getItems() {
    return apiClient.get("/Items");
  },
  updateIssue(issue) {
    return apiClient.put("/Issue", issue);
  },
  exchangeCodeForToken(code) {
    console.log(Config.someSecureLogin.tokenExchangeURL+"?code="+code)
    return apiClient.get(Config.someSecureLogin.tokenExchangeURL+"?code="+code)
  },
  //etc!
  imageSource: Config.s3
};
