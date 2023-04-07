import { createContext } from 'react';
import { Product } from '../../models/ProductModel';
import { ProductStateType } from '../../interfaces/ProductStateInterface';

export type ProductContextProps = {
    productState : ProductStateType,
    getProductsByQuery : ( query : string ) => void
}

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

export default ProductContext;