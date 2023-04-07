import { createContext } from 'react';

//OWN IMPORTS
import { ProductStateType } from '../../interfaces/ProductStateInterface';

export type ProductContextProps = {
    productState : ProductStateType,
    getProductsByQuery : ( query : string ) => void,
    getProductById : ( id : string ) => void,
    emptyProducts : () => void
}

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

export default ProductContext;