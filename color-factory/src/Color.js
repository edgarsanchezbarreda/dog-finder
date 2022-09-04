import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Color.css';

export const Color = ({ backgroundColors }) => {
    const { color } = useParams();
    const hexCode = backgroundColors.find(
        colors => colors.color === color
    ).backgroundColor;

    const bgColor = { backgroundColor: hexCode };
    return (
        <div className='Color' style={bgColor}>
            <h1>This is the color {color}</h1>
            <li className='Colors-list-items'>
                <Link to={'/colors'}>Go Back</Link>
            </li>
        </div>
    );
};
