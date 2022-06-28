import React from "react";
import Card from '../UI/Card/Card'
import UsersListStyles from './UsersList.module.scss'

const UsersList = (props) => {
  return (
    <Card className={UsersListStyles.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
