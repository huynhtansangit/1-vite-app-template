import React, { useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./AddUser.module.scss";
import Button from "../UI/Button/Button";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (validateInput()) {
      props.onAddUser(enteredUsername, enteredAge);
      resetForm();
    }
    return;
  };
  const resetForm = () => {
    setEnteredAge("");
    setEnteredUsername("");
  };
  const validateInput = () => {
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0)
      return false;
    if (+enteredAge < 1) return false;
    return true;
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUser;
