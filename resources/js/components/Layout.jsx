import React from 'react';
import NavigationBar from './NavigationBar';
import Container from 'react-bootstrap/Container';

const Layout = ({ children }) => {
    return (
        <Container fluid>
            <NavigationBar />
            <Container className='py-5'>
               { children }
            </Container>
        </Container>
    );
}

export default Layout;
