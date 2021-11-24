import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const PlaceReview = (props) => {
    const { img, name, amount, quantity, key, describe } = props.place;
    const { handleRemove } = props;
    return (
        <Col>
        <Card>
            <Card.Img width="00px" height="300px" variant="top" src={img} />
            <Card.Body>
            <Card.Title className="text-primary mb-4">{name}</Card.Title>
            <Card.Title>Amount: {amount}</Card.Title>
            <Card.Title>Person: {quantity}</Card.Title>
            <Card.Text>
                {describe}
            </Card.Text>
            <Button
                onClick={() => handleRemove(key)}
                className="btn-info px-5 mt-3">Cancel
            </Button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default PlaceReview;