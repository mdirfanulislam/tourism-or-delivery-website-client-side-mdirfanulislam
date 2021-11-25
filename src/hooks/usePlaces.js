import { useEffect } from "react";
import { useState } from "react"

const usePlaces = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://stark-cliffs-18721.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, []);
    return [places, setPlaces];
}

export default usePlaces;