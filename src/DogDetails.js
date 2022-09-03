import React from 'react';
import { useParams } from 'react-router-dom';
import App from './App';
export const DogDetails = () => {
    const dogs = App.defaultProps.dogs;
    console.log(dogs);
    const { dogName } = useParams();
    const dog = dogs.find(dog => dog.name === dogName);
    console.log(dog);
    return (
        <div>
            <h1>{dog.name}</h1>
            <h3>{dog.age}</h3>
            <img src={dog.src} alt={dog.name} />
            <ul>
                {dog.facts.map(fact => (
                    <li>{fact}</li>
                ))}
            </ul>
        </div>
    );
};
