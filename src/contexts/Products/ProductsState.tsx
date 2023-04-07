import { useReducer } from 'react';
import ProductContext from './ProductsContext';
import { Product } from '../../models/ProductModel';
import productsReducer from './ProductsReducer';
import { ProductStateType } from '../../interfaces/ProductStateInterface';
import ProductsService from '../../services/ProductsService';
import * as Types from '../types'

interface props {
  children : JSX.Element | JSX.Element[]
}

const INITIAL_STATE: ProductStateType = {
  products: [],
  product : {} as Product
}

const ProductsState = ({ children } : props) => {
  const [ productState, dispatch ] = useReducer(productsReducer, INITIAL_STATE);

  const getProductsByQuery = ( query : string ) => {
    ProductsService.getProductsByQuery( query ).then(
      (response) => {
        dispatch({
          type: Types.PRODUCTS_BY_QUERY,
          payload: response
        });
      }
    )
  };

  const emptyProducts = () => {
    dispatch({ type: Types.EMPTY_PRODUCTS, payload: [] });
  }

  const getProductById = ( id : string ) => {
    ProductsService.getProductById( id ).then(
      (response) => {
        dispatch({
          type: Types.PRODUCT_BY_ID,
          payload: [response]
        });
      }
    )
  };

  return (
    <ProductContext.Provider value={{
      productState,
      getProductsByQuery,
      getProductById,
      emptyProducts
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsState;