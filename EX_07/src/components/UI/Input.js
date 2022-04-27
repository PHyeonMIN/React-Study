import React from "react";

import classes from './Input.module.css';

const Input = props => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />              {/* 전개 연산자 :  {type:'text'} -> {...props.input} -> type='text' */}
    </div>
};

export default Input;