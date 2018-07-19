import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.scss';

export const Input = ({
    label,
    type,
    name,
    onChange
}) => (
    <div>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <input
            className={styles.input}
            onChange={(event) => {
                let value = event.target.value;
                if (type === 'checkbox') {
                    value = event.target.checked;
                }
                onChange(value)
            }}
            type={type}
            name={name}
            id={name}
        />
    </div>
);

Input.defaultProps = {
    onChange: () => undefined
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['password', 'text', 'checkbox']).isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

export default Input;