import React from 'react';

const Button = ({ children, onClick, className }) => {
    const styles = {
        display: 'inline-block',
        border: 'none',
        padding: '1rem 2rem',
        margin: '1rem',
        textDecoration: 'none',
        background: '#414141',
        color: '#ffffff',
        fontFamily: 'inherit',
        fontSize: '1.6rem',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'background 250ms ease-in-out, transform 150ms ease',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        borderRadius: 4,
    };

    return (
        <button style={styles} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
