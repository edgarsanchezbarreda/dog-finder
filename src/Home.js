import React from 'react';

export const Home = ({ dogs }) => {
    return (
        <div>
            <h1>Dog Finder</h1>
            {dogs.map(dog => (
                <div>
                    <h1>{dog.name}</h1>
                    <h3>{dog.age}</h3>
                    <img src={dog.src} alt={dog.name} />
                    <ul></ul>
                    {dog.facts.map(fact => (
                        <li>{fact}</li>
                    ))}
                </div>
            ))}
        </div>
    );
};
