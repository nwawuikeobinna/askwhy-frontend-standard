let BASE_URL;

if (window.location.href.includes("localhost")) {
  BASE_URL = "http://localhost:5000/api/v1/";
}

if (window.location.href.includes("askwhy.herokuapp.com")) {
  BASE_URL = "https://askwhy-backend.herokuapp.com/api/v1/";
}

if (window.location.href.includes("askwhy.herokuapp.com")) {
  BASE_URL = "https://askwhy-backend.herokuapp.com/api/v1/";
}

export { BASE_URL };
