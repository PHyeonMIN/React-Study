import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}         // props.type가 정의되지않았다면 'button'
      onClick={props.onClick}
    >{props.children}</button>
  ); 
};

export default Button;
