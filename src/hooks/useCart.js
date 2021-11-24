import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = places => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (places.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedPlace = places.find(place => place.key === key);
                if (addedPlace) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedPlace.quantity = quantity;
                    storedCart.push(addedPlace);
                }
            }
            setCart(storedCart);
        }

    }, [places]);

    return [cart, setCart];
}

export default useCart;