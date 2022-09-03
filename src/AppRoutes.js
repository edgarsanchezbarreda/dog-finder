import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DogDetails } from './DogDetails';
import { Home } from './Home';
import App from './App';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/dogs/:dogName' element={<DogDetails />} />
            <Route
                path='/dogs'
                element={<Home dogs={App.defaultProps.dogs} />}
            />
            <Route
                path='*'
                element={<Navigate to={'/dogs'} replace={true} />}
            />
        </Routes>
    );
};
