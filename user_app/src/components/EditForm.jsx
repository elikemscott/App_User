import React, { Component } from "react";
import { connect } from "react-redux";
import { editUser } from "../store/usersAction";

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.user.name,
      email: props.user.email,
      gen: props.user.gen,
    };

    this.id = props.match.params.id;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    };
    this.props.editUser(this.id, updatedInfo);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
      
      <div class="card mx-xl-5">

  
  <div class="card-body">

   
    <form onSubmit={this.handleSubmit}>
      <p class="h4 text-center py-4">Update User</p>

      
      <label for="defaultFormCardNameEx" class="grey-text font-weight-light">Your name</label>
      <input type="text" name="name" value={this.state.name} onChange={this.handleChange} id="defaultFormCardNameEx" class="form-control"/>

      <br/>

      
      <label for="defaultFormCardEmailEx" class="grey-text font-weight-light">Your Email </label>
      <input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="defaultFormCardEmailEx" class="form-control"/>

      <br/>

      <label for="defaultFormCardEmailEx" class="grey-text font-weight-light">Gen</label>
      <input type="number" name="gen" value={this.state.gen} onChange={this.handleChange} id="defaultFormCardEmailEx" class="form-control"/>

      <div class="text-center py-4 mt-3">
        <button class="btn btn-outline-purple" type="submit">Update<i
            class="fa fa-paper-plane-o ml-2"></i></button>
      </div>
    </form>
    

  </div>
  

</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.usersState.users.find((user) => user.id === ownProps.match.params.id),
});

const mapDispatchToProps = {
  editUser: editUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
