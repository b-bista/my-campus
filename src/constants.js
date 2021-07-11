//Backend api endpoint
const API = "";
if (process.env.NODE_ENV === "development") {
  API = `http:/www.localhost:4000`;
} else {
  API = ``;
}

export { API };
