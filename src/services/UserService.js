import axios from "axios";

export class UserService {
  static getAllUsers() {
    let api = "https://jsonplaceholder.typicode.com/userss";
    return axios.get(api);
  }
}
