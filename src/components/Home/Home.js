import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import './Home.css';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import Place from '../Place/Place';
import { Row } from 'react-bootstrap';

const Home = () => {
    const [places, setPlaces] = useState([]);
    const [cart, setCart] = useCart(places);
    const [displayPlaces, setDisplayPlaces] = useState([]);

    useEffect(() => {
        fetch('https://stark-cliffs-18721.herokuapp.com/places')
            .then(res => res.json())
            .then(data => {
                setPlaces(data);
                setDisplayPlaces(data);
            });
    }, []);



    const handleAddToCart = (place) => {
        const exists = cart.find(pd => pd.key === place.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== place.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, place];
        }
        else {
            place.quantity = 1;
            newCart = [...cart, place];
        }
        setCart(newCart);
        addToDb(place.key);

    }

    return (
            <div className="places-container">
                <div className="place-container">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        displayPlaces.map(place => <Place
                            key={place.key}
                            place={place}
                            handleAddToCart={handleAddToCart}
                        >
                        </Place>)
                    }
                </Row>
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn-click">Place Detail</button>
                        </Link>
                    </Cart>
                </div>
            </div>
    );
};

export default Home;