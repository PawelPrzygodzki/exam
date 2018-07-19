import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.scss';

export const Button = ({value}) => (
    <button className={styles.button} type="submit">{value}</button>
);

Button.propTypes = {
    value: PropTypes.string
};

export default Button;