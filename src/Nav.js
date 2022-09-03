import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = ({ dogs }) => {
    return (
        <ul>
            {dogs.map(dog => (
                <li>
                    <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                </li>
            ))}
            <li>
                <Link to={'/dogs'}>Home</Link>
            </li>
        </ul>
    );
};
