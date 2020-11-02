import axios from "axios";

export default (token = null) => {
  if (token) {
    // Apply token to every request
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    // If the token isn't there
    delete axios.defaults.headers.common.authorization;
  }
};
