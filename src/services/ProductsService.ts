import { Product } from "../models/ProductModel";
import { ProductsResponse } from "../models/ProductResponseModel";
import { MELI_API } from "./BaseService";

class ProductService {
  getProductsByQuery = async ( query : string ) => {
    let response = await MELI_API.get<ProductsResponse>(`/sites/MLA/search?q=${query}&limit=4`);
    return response.data.results
  };

  getProductById = async ( id : string ) => {
    let response = await MELI_API.get<Product>(`/items/${id}`);
    console.log(response);
    return response.data;
  };
}

export default new ProductService();
