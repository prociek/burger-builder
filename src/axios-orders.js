import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://react-burger-tp-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
