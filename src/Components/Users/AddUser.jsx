import React,{useState} from "react";
import Card from "../UI/Card/Card";
import styles from "./AddUser.module.scss";
import Button from "../UI/Button/Button";
const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername,enteredAge)
  };
  const usernameChangeHandler=(event)=>{
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
  }
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" onChange={ageChangeHandler}/>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUser;
