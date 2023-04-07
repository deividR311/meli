import React, { useContext } from 'react';
import ProductContext from '../../contexts/Products/ProductsContext';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  
  //HOOKS
  const { productState } = useContext(ProductContext);
  const { products } = productState;
  console.log(products);
  return (
    <>
      ProductDetail
    </>
  )
}

export default ProductDetail
