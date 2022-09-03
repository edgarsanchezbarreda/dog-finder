import React from 'react';
import { Nav } from './Nav';
import { AppRoutes } from './AppRoutes';
import './App.css';

function App() {
    const dogs = App.defaultProps.dogs;

    return (
        <div className='App'>
            <Nav dogs={dogs} />
            <AppRoutes />
        </div>
    );
}

App.defaultProps = {
    dogs: [
        {
            name: 'Whiskey',
            age: 5,
            src: '/images/whiskey.jpg',
            facts: [
                'Whiskey loves eating popcorn.',
                'Whiskey is a terrible guard dog.',
                'Whiskey wants to cuddle with you!',
            ],
        },
        {
            name: 'Duke',
            age: 3,
            src: '/images/duke.jpg',
            facts: [
                'Duke believes that ball is life.',
                'Duke likes snow.',
                'Duke enjoys pawing other dogs.',
            ],
        },
        {
            name: 'Perry',
            age: 4,
            src: '/images/perry.jpg',
            facts: [
                'Perry loves all humans.',
                'Perry demolishes all snacks.',
                'Perry hates the rain.',
            ],
        },
        {
            name: 'Tubby',
            age: 4,
            src: '/images/tubby.jpg',
            facts: [
                'Tubby is really stupid.',
                'Tubby does not like walks.',
                'Angelina used to hate Tubby, but claims not to anymore.',
            ],
        },
    ],
};

export default App;
