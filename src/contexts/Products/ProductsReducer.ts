import { ProductStateType } from '../../interfaces/ProductStateInterface';
import { Product } from '../../models/ProductModel';
import * as Types from '../types';

type action = {
  type    : string,
  payload : Product[]
}

export default (state : ProductStateType, { type, payload } : action ) : ProductStateType => {
  switch (type) {
    
    case Types.PRODUCTS_BY_QUERY:
      return {
        ...state,
        products: payload
      };

    default:
      return state;
  }
};