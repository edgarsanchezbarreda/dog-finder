import React, { useState } from 'react';
import { ColorsHeader } from './ColorsHeader';
import { ColorsBody } from './ColorsBody';
import './Colors.css';

export const Colors = ({ colors }) => {
    return (
        <div className='Colors'>
            <ColorsHeader />
            <ColorsBody colors={colors} />
        </div>
    );
    // return (
    //     <div className='Colors'>
    //         <div className='Colors-header'>
    //             <h3 className='Colors-title'>Welcome to the Color Factory</h3>
    //             <h1>
    //                 <Link to={'/colors/new'} className='Colors-add-color'>
    //                     Add a Color
    //                 </Link>
    //             </h1>
    //         </div>
    //         <div className='Colors-body'>
    //             <p>Please select a color</p>
    //             <ul className='Colors-list'>
    //                 {colors.map(color => (
    //                     <li className='Colors-list-items'>
    //                         <Link to={`/colors/${color}`}>{color}</Link>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     </div>
    // );
};
