import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

//OWN IMPORTS
import ProductContext from '../../contexts/Products/ProductsContext';


const Product = () => {
  const history = useNavigate();

  //HOOKS
  const { productState } = useContext(ProductContext);
  const { products } = productState;

  const redirectProductDetail = ( id : string ) => {
    history(`${id}`);
  }
  
  return (
    <>
      { products.map(({ id, thumbnail, price, title, site_id }, i) => (
        <div key={id}>
          <Row key={id} onClick={() => redirectProductDetail( id )}>
            <Col className='product-col-img'>
              <img src={thumbnail} alt='productImage'/>
            </Col>
            <Col xs={8}>
              <p><strong>$ { price }</strong></p>
              <p className='product-p-title'>{ title }</p>
            </Col>
            <Col className='product-col-span'>
              <span className='product-span-site_id'>{ site_id }</span>
            </Col>
          </Row>
          { i !== products.length - 1 && (<hr />)}
        </div>
        ))
      }
    </>
  )
}

export default Product;
