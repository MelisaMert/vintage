import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import RestaurantList from '../../components/RestaurantList';
import { URL } from "../../environment/index";
import { Form, Button, Container, Row, Col } from "react-bootstrap"


export default function Restaurants({ restaurants }) {

    const [name, setName] = useState('');
    const [town, setTown] = useState('');
    const [city, setCity] = useState('');
    const [category, setCategory] = useState('');

    const submitRestaurant = async () => {
        let req = {};
        req.name = name;
        req.town = town;
        req.city = city;
        req.category = category;
        try {
            const response = await axios.post('/api/restaurants', {
                restaurant: req
            })
            const data = response.data;
            console.log('Data', data);
        } catch (e) {
            throw e;
        }
    }

    const getForm = () => {
        return (
            <Container>
                <Row>
                    <Col sm={5}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Town</Form.Label>
                                <Form.Control type="text" placeholder="Town" value={town} onChange={(e) => setTown(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="secondary" onClick={submitRestaurant}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
        );
    }

    return (
        <>
            <Head>
                <title>Restaurants</title>
                <link rel="icon" href="/vercel.svg" />
            </Head>
                    
            <RestaurantList restaurants={restaurants} />
            {getForm()}  
        </>
    )
}

export const getStaticProps = async () => {
    let restaurants;
    try {
        const response = await axios.get(`${URL}/api/restaurants`);
        restaurants = response.data;
    } catch (e) {
        throw e;
    }
    return {
        props: {
            restaurants
        }
    }
}