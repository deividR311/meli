import React, { useReducer } from 'react';
import ProductContext from './ProductsContext';
import { Product } from '../../models/ProductModel';
import productsReducer from './ProductsReducer';
import { ProductStateType } from '../../interfaces/ProductStateInterface';

interface props {
  children : JSX.Element | JSX.Element[]
}

const INITIAL_STATE: ProductStateType = {
  product: []
}

const ProductsState = ({ children } : props) => {
  const [ productState, dispatch ] = useReducer(productsReducer, INITIAL_STATE);
  return (
    <ProductContext.Provider value={{
      productState
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsState;