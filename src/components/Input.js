import React from 'react';
import styled from 'styled-components/macro';
import Button from './Button.js';

const Input = styled(Button)`
    max-width: 10rem;

    ::placeholder {
        color: lightgrey;
    }

    :focus {
        outline: none;
    }
`;

export default Input;
