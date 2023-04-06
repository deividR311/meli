import {
    Row,
    Button,
    Container,
    Form,
    Navbar,
    Col
} from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';

// OWN IMPORTS
import meliLogo from '../../assets/meli-logo.png';
import { ProductDetailPage, ProductPage } from '../Pages';
import { NavBreadCrumb } from '../../shared/Shared';


const Header = () => {
    
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
                                        type="search"
                                        placeholder="Nunca dejes de Buscar"
                                        aria-label="Search"
                                    />
                                    <Button variant="light"><Search /></Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Navbar>

            <Container>
                <NavBreadCrumb />
                <div className='header-router-ctn'>
                    <Routes>
                        <Route path={'items'} element={ <ProductPage /> } />
                        <Route path={'items/:id'} element={ <ProductDetailPage /> } />
                    </Routes>
                </div>
            </Container>
        </>
    )
}

export default Header
