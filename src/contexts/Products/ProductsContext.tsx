import { createContext } from 'react';
import { Product } from '../../models/ProductModel';
import { ProductStateType } from '../../interfaces/ProductStateInterface';

export type ProductContextProps = {
    productState : ProductStateType
}

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

export default ProductContext;