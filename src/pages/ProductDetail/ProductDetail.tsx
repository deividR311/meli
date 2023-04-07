import React, { useContext } from 'react';
import ProductContext from '../../contexts/Products/ProductsContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { numberFormat } from '../../helpers/NumberFormat';

const ProductDetail = () => {
  const { id } = useParams();
  
  //HOOKS
  const { productState, getProductById } = useContext(ProductContext);
  const { product } = productState;

  useEffect(() => {
    (id) && getProductById( id );
  }, []);

  const { thumbnail, title, price, condition, warranty } = product;
  return (
    <>
      { product.id ?
        <div>
          <Row>
            <Col xs={8} className='product-detail-col-img'>
              <img src={thumbnail} alt='productImage' width={400} height={400}/>
            </Col>
            <Col>
              <p className='product-detail-p-condition'>{ condition } / { warranty }</p>
              <p className='product-detail-p-title'><strong>{ title }</strong></p>
              <p className='product-detail-p-price'> { numberFormat(price) }</p>
              <Button variant="primary" size="lg" className='product-detail-btn'>Comprar</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              <span className='product-detail-description-title'><strong>Descripción del producto</strong></span>
              {/* Se coloca esta alternativa ya que muchos de los productos no traen descripcion */}
              <p className='product-detail-p-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, odio doloribus? Aspernatur quisquam nostrum alias ad nesciunt a voluptates atque tempore. Et, vero. Expedita, molestias repellendus perspiciatis provident perferendis qui.</p>
            </Col>
            <Col>
            </Col>
          </Row>
        </div>
        :
        <>
          Loading...
        </>
      }
    </>
  )
}

export default ProductDetail
