let API = "";

if (process.env.NODE_ENV === "development") {
  API = "http://localhost:4000";
} else {
  API = "http://my-campus-backend.herokuapp.com";
}

export { API };
