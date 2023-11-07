import axios from "axios";

export class UserService {
  static getAllUsers() {
    let api = "https://jsonplaceholder.typicode.com/users";
    return axios.get(api);
  }
}
