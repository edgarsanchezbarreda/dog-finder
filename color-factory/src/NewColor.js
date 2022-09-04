import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NewColor.css';

export const NewColor = ({ addColor }) => {
    const initialState = {
        color: '',
        backgroundColor: '',
    };

    let navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
        console.log(formData);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        addColor({ ...formData });
        setFormData(initialState);
        navigate('/colors', { replace: true });
    };
    return (
        <div className='NewColor'>
            <form className='NewColor-form' onSubmit={handleSubmit}>
                <label htmlFor='color' className='NewColor-label'>
                    Color Name
                </label>
                <input
                    className='NewColor-colorName-input'
                    type='text'
                    name='color'
                    id='color'
                    placeholder='Enter a color name'
                    value={formData.color}
                    onChange={handleChange}
                />
                <label htmlFor='backgroundColor' className='NewColor-label'>
                    Color Value
                </label>
                <input
                    className='NewColor-color-input'
                    type='color'
                    name='backgroundColor'
                    id='backgroundColorr'
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
                <button>Add this color</button>
            </form>
            <Link to={'/colors'}>Go Back</Link>
        </div>
    );
};
