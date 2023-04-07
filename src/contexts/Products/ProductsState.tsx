import React, { useReducer } from 'react';
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
  products: []
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
  return (
    <ProductContext.Provider value={{
      productState,
      getProductsByQuery
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsState;