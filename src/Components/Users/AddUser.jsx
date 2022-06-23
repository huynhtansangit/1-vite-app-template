import React from "react";
import Card from "../Card/Card";
import styles from "./AddUser.module.scss";
const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default AddUser;
