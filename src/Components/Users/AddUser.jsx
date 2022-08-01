import React, { Fragment, useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./AddUser.module.scss";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/Error/ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errors, setErrors] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (validateInput()) {
      props.onAddUser(enteredUsername, enteredAge);
      resetForm();
    } else return;
  };
  const resetForm = () => {
    setEnteredAge("");
    setEnteredUsername("");
  };
  const validateInput = () => {
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setErrors({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return false;
    }
    if (+enteredAge < 1) {
      setErrors({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return false;
    }
    return true;
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const resetErrorsHandler = () => {
    setErrors(undefined);
  };
  return (
    <Fragment>
      {errors && (
        <ErrorModal
          title={errors.title}
          message={errors.message}
          onResetErrors={resetErrorsHandler}
        />
      )}
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
    </Fragment>
  );
};

export default AddUser;
