import React from "react"; 
import { Link, useForm } from "@inertiajs/inertia-react";

import Layout from '../../components/Layout';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Create = () => {
    const { data, setData, post, errors } = useForm({
        first_name: '',
        last_name: '',
        email: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/customers');
    } 

    function destroy() {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("posts.destroy", post.id));
        }
    }

    return (
        <Layout>
            <Row className='justify-content-center'>
                <Col md={9}>
                    <Card>
                        <Card.Header>
                            <h3>Add Customer
                                <Link href="/customers" className='btn btn-secondary btn-sm float-end'>Back</Link>
                            </h3>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mb-3'>
                                    <Form.Control type='text' value={data.first_name} onChange={e => setData('first_name', e.target.value)} placeholder='First name' />
                                    {errors.first_name && <small className='text-danger'>{errors.first_name}</small>}
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Control type='text' value={data.last_name} onChange={e => setData('last_name', e.target.value)} placeholder='Last name' />
                                    {errors.last_name && <small className='text-danger'>{errors.last_name}</small>}
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Control type='email' value={data.email} onChange={e => setData('email', e.target.value)} placeholder='Email address' />
                                    {errors.email && <small className='text-danger'>{errors.email}</small>}
                                </Form.Group>

                                <Form.Group>
                                    <Button type='submit' variant='success btn-sm'>Save</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Layout>
    );
}

export default Create;
