import { useContext } from 'react';
import {
    Row,
    Button,
    Container,
    Form,
    Navbar,
    Col
} from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';

// OWN IMPORTS
import meliLogo from '../../assets/meli-logo.png';
import { ProductDetailPage, ProductPage } from '../Pages';
import { NavBreadCrumb } from '../../shared/Shared';
import ProductContext from '../../contexts/Products/ProductsContext';
import { useForm } from '../../hooks/UseForm';

interface FormData {
    query : string
}

const Header = () => {
    const history = useNavigate();

    //HOOKS
    const { productState, getProductsByQuery } = useContext(ProductContext);
    const { form, handleChange } = useForm<FormData>({ query : '' })

    const { query } = form;

    const getProduct = () => {
        (query !== '') && getProductsByQuery(query);
        history('items');
    }
    
    return (
        <>
            <Navbar expand="lg" className='header-navbar'>
                <Container>
                    <div className='header-ctn'>
                        <Row>
                            <Col sm={1} className='header-col-img'><img src={meliLogo} alt="meliLogo" width={40} height={30} /></Col>
                            <Col sm={11}>
                                <Form className="d-flex header-form">
                                    <Form.Control
                                        className='header-form-control'
                                        type="search"
                                        placeholder="Nunca dejes de Buscar"
                                        aria-label="Search"
                                        name='query'
                                        value={query}
                                        onChange={handleChange}
                                    />
                                    <Button variant="light" className='header-form-btn' onClick={getProduct}><Search /></Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Navbar>

            <Container>
                { productState.products.length > 0 &&
                    <>
                        <NavBreadCrumb />
                        <div className='header-router-ctn'>
                            <Routes>
                                <Route path={'items'} element={ <ProductPage /> } />
                                <Route path={'items/:id'} element={ <ProductDetailPage /> } />
                            </Routes>
                        </div>
                    </>
                }
            </Container>
        </>
    )
}

export default Header
