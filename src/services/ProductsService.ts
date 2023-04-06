import { ProductsResponse } from "../models/ProductResponseModel";
import { MELI_API } from "./BaseService";

class ProductService {
  getProductsByQuery = async ( query : string ) => {
    let response = await MELI_API.get<ProductsResponse>(`/sites/MLA/search?q=${query}&limit=4`);
    console.log(response);
  };
}

export default new ProductService();
