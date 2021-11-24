import React from 'react';
import usePlaces from '../../hooks/usePlaces';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import { removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import PlaceReview from '../PlaceReview/PlaceReview';
import { Row } from 'react-bootstrap';

const PlaceDetail = () => {
    const [places] = usePlaces();
    const [cart, setCart] = useCart(places);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(place => place.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToConfirm = () => {
        history.push('/confirmBook');
    }

    return (
        <div className="places-container">
            <div className="place-container">
            <Row xs={1}>
                {
                    cart.map(place => <PlaceReview
                        key={place.key}
                        place={place}
                        handleRemove={handleRemove}
                    ></PlaceReview>)
                }
            </Row>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedToConfirm} className="btn-click">Booking Confirm</button>
                </Cart>
            </div>
        </div>
    );
};

export default PlaceDetail;