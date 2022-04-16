import React, { useState } from "react";

import classes from './AddUser.module.css';

import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername ] = useState('');
    const [enteredAge, setEnteredAge ] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {  // trim() : 공백제거
        return;
    };
    if(+enteredAge<1){      // enteredAge는 문자이므로 안전하게 해주기 위해 앞에 +추가해서 숫자로 강제변환
        return;
    };
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
