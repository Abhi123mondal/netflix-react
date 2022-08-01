//import axios from "axios";


//const  instance = axios.create({
    //baseURL: "https://www.themoviedb.org",
    //headers: {"Access-Control-Allow-Origin": "*"}

//});
import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  https: config,
});

export default instance;

//export default instance;