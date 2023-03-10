import React from "react";

import styles from './select.module.scss';

const Select = ({defaultOption, options, value, onChange}) => {
    return(
        <select 
            className={styles.select} 
            value={value} 
            onChange={(event) => onChange(event.target.value)}>
            <option disabled value="">{defaultOption}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    )
}

export default Select