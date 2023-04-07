import { ProductStateType } from '../../interfaces/ProductStateInterface';
import { Product } from '../../models/ProductModel';
import * as Types from '../types';

type action = {
  type    : string,
  payload : Product[]
}

const productsReducer = (state : ProductStateType, { type, payload } : action ) : ProductStateType => {
  switch (type) {
    
    case Types.PRODUCTS_BY_QUERY:
      return {
        ...state,
        products: payload
      };

    case Types.EMPTY_PRODUCTS:
      return {
        ...state,
        products: payload
      };

    case Types.PRODUCT_BY_ID:
      return {
        ...state,
        product: payload[0]
      };

    default:
      return state;
  }
};

export default productsReducer;