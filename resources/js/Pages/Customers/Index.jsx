import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";

import Layout from '../../components/Layout';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Index = () => {
    const { customers } = usePage().props;

    function destroy(e, id) { 
        e.preventDefault();
        
        Inertia.delete(`/customers/${id}`);
    }

    return (
        <Layout>
            <Row className='justify-content-center'>
                <Col md={9}>
                    <Card>
                        <Card.Header>
                            <h3>Customers
                                <Link href='/customers/create' className='btn btn-success btn-sm float-end'>Add Customer</Link>
                            </h3>
                        </Card.Header>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email address</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map(({ id, first_name, last_name, email }) => (
                                        <tr key={id}>
                                            <td>{first_name}</td>
                                            <td>{last_name}</td>
                                            <td>{email}</td>
                                            <td>
                                                <Link href={`/customers/${id}/edit`} className='btn btn-primary btn-sm'>Edit</Link>
                                            </td>
                                            <td>
                                                <Button type='button' onClick={(e) => destroy(e, id)} variant='danger btn-sm'>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}

                                    {customers.length === 0 && (
                                        <tr>
                                            <td
                                                className="text-center"
                                                colSpan="5"
                                            >
                                                No customers found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Layout>
    );
}

export default Index;
