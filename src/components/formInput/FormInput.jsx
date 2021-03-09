/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styles/form.css';

function FormInput({ id, type, minLength, value, placeholder, onChangeFn }) {
  return (
    <div className={styles.field}>
      <input
        id={id}
        className={styles.floatingInput}
        type={type}
        minLength={minLength}
        maxLength="50"
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => onChangeFn(target.value)}
        required />
      <label 
        className={styles.floatingLabel} data-content={placeholder}
        htmlFor={id}>
        <span className={styles.hiddenVisually}>{placeholder}</span>
      </label>
    </div>
  );
}

export default FormInput;
