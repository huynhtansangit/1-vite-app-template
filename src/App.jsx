import './Assets/Styles/App.css'
import AddUser from './Components/Users/AddUser'
import Main from './Layouts/Main/Main.jsx'
import UsersList from './Components/Users/UsersList'
import React,{useState} from 'react'

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler =(uName,uAge)=>{
      setUsersList(prevUsersList=>{
        return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
      })
  }

  return (
    <Main>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </Main>
  )
}

export default App
