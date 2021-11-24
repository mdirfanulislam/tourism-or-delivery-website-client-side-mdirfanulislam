import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Place.css';

const Place = (props) => {
    const { name, img, amount, describe } = props.place;

    return (
        <Col>
        <Card>
            <Card.Img width="300px" height="200px" variant="top" src={img} />
            <Card.Body>
            <Card.Title className="text-primary mb-4">{name}</Card.Title>
            <Card.Title>Amount: {amount}</Card.Title>
            <Card.Text>
                {describe}
            </Card.Text>
            <Button
                onClick={() => props.handleAddToCart(props.place)}
            className="btn-info px-5 mt-3 fw-bold text-white">Book Now
            </Button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Place;