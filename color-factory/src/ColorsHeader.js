import React from 'react';
import { Link } from 'react-router-dom';

export const ColorsHeader = () => {
    return (
        <div className='Colors-header'>
            <h3 className='Colors-title'>Welcome to the Color Factory</h3>
            <h1>
                <Link to={'/colors/new'} className='Colors-add-color'>
                    Add a Color
                </Link>
            </h1>
        </div>
    );
};
