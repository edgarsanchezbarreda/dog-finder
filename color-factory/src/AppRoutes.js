import React, { useState } from 'react';
import {
    Routes,
    Route,
    Navigate,
    useSearchParams,
    useLocation,
} from 'react-router-dom';
import { Colors } from './Colors';
import { Color } from './Color';
import { NewColor } from './NewColor';

export const AppRoutes = () => {
    const initialColors = [
        {
            color: 'red',
            backgroundColor: '#ff0000',
        },
        {
            color: 'blue',
            backgroundColor: '#0000FF',
        },
        {
            color: 'green',
            backgroundColor: '#00FF00',
        },
    ];

    const [colors, setColors] = useState(initialColors);

    const currColors = colors.map(colors => colors.color);
    console.log(currColors);
    let location = useLocation();
    let param = location.pathname.slice(8);

    const addColor = newColor => {
        setColors(colors => [...colors, { ...newColor }]);
    };
    return (
        <Routes>
            <Route
                path='/colors/:color'
                element={<Color backgroundColors={colors} />}
            />
            <Route
                path='/colors/new'
                element={<NewColor addColor={addColor} />}
            />
            <Route path='/colors' element={<Colors colors={colors} />} />
            <Route
                path='*'
                element={<Navigate to={'/colors'} replace={true} />}
            />
        </Routes>
    );
};
