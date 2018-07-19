import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.scss';

export const Checkbox = ({
    label,
    name,
    onChange
}) => (
    <div className={styles.container}>
        <input
            className={styles.input}
            onChange={(event) => onChange( event.target.checked)}
            type='checkbox'
            name={name}
            id={name}
        />
        <label htmlFor={name} className={styles.label}>{label}</label>
    </div>
);

Checkbox.defaultProps = {
    onChange: () => undefined
};

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

export default Checkbox;