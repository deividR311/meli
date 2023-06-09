import { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

//OWN IMPORTS
import { routes } from './Routes';
import ProductsState from '../contexts/Products/ProductsState';

const Router = () => {
  return (
    <>
      <ProductsState>
        <Suspense fallback={<span>Loading...</span>}>
          <BrowserRouter>
            <Routes>
              {
                routes.map(({ path, Component }, i) => (
                  <Route key={`${i}-${path}`} path={path} element={ <Component /> } />
                ))
              }
            </Routes>
          </BrowserRouter>
        </Suspense> 
      </ProductsState>
    </>
  )
}

export default Router
