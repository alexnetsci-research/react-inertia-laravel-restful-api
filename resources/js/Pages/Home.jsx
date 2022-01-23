import React from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';

function Home() {
    return (
        <Layout>
            <Row className='text-center'>
                <h1>React-Laravel RESTful API</h1>
            </Row>
        </Layout>
    );
}

export default Home;
