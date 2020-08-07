import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, deleteUser, getAllUsers } from "./store/usersAction";
import UsersForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";
import {logoutUser } from './store/authAction'
// import EditForm from './components/EditForm';
export class App extends Component {
  addNewUser = (newUser) => {
    this.props.addUser(newUser);
  };

  deleteUser = (user_id) => {
    this.props.deleteUser(user_id);
  };
  componentDidMount = () => {
    this.props.getAllUsers();
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.props.logoutUser}>Logout</button>
        <UsersForm addUser={this.addNewUser} />
        <div className="App__User-info"></div>
        {this.props.users.map((user, index) => {
          return (
            <UserInfo
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              gen={user.gen}
              removeUser={this.deleteUser}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersState.users,
  };
 
};

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
  getAllUsers: getAllUsers,
  logoutUser: logoutUser, 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
