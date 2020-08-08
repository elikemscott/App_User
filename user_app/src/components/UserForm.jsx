import React, { Component } from "react";


class UsersForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    };
    this.props.addUser(newUser);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };

  render() {
    return (
      <div>
     

      
<div class="card add-user-card">

  
  <div class="card-body">

    
    <form onSubmit={this.handleSubmit} >
      <p class="h4 text-center py-4">Add User</p>

      
      <div class="md-form">
        <i class="fa fa-user prefix grey-text"></i>
        <input type="text" name='name' value={this.state.name} onChange={this.handleChange} id="materialFormCardNameEx" class="form-control"/>
        <label for="materialFormCardNameEx" class="font-weight-light">Your name</label>
      </div>

      
      <div class="md-form">
        <i class="fa fa-envelope prefix grey-text"></i>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="materialFormCardEmailEx" class="form-control"/>
        <label for="materialFormCardEmailEx" class="font-weight-light">Your email</label>
      </div>

      
      <div class="md-form">
        <i class="fa fa-exclamation-triangle prefix grey-text"></i>
        <input type="number" name="gen" value={this.state.gen} onChange={this.handleChange} id="" class="form-control"/>
        <label for="materialFormCardConfirmEx" class="font-weight-light">Gen</label>
      </div>

      
      

      <div class="text-center py-4 mt-3">
        <button class="btn btn-cyan" type="submit">Add</button>
      </div>
    </form>
    

  </div>
  

</div>


      
      </div>
    );
  }
}

export default UsersForm;
