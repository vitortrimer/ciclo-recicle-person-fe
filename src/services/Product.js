import axios from "axios";
import { baseUrl } from "../config/constants";

class Product {

  getProduct(id) {
    return axios.get(`${baseUrl}/packaging/${id}`)
  }
}

export default Product