import React from 'react';
import styled from 'styled-components/macro';

const Button = styled.button.attrs(props => ({
    type: 'number',
}))`
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 1rem;
    text-decoration: none;
    background: ${props => props.backgroundColor || '#414141'};
    color: #ffffff;
    font-family: inherit;
    font-size: 1.6rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    border-radius: 4px;
    -webkit-appearance: none;
    -moz-appearance: none;

    :hover,
    :focus {
        background: #a2272d;
    }

    :focus {
        outline: 1px solid #fff;
        outline-offst: -4px;
    }

    :active {
        transform: scale(0.99);
    }
`;

export default Button;
