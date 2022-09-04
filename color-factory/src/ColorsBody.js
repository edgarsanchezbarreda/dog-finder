import React from 'react';
import { Link } from 'react-router-dom';

export const ColorsBody = ({ colors }) => {
    return (
        <div className='Colors-body'>
            <p>Please select a color</p>
            <ul className='Colors-list'>
                {colors.map(color => (
                    <li className='Colors-list-items'>
                        <Link to={`/colors/${color.color}`}>{color.color}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
