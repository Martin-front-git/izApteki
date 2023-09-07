import axios from "axios";

//make an axios request to db.json
const todoService = {
  getAll: async () => {
    return axios.get("/db.json");
  },
};

export default todoService;
