import React from 'react';
import {connect} from 'react-redux';
import { LoginWithEmail, LoginWithGoogle } from '../store/authAction';
import {Link} from 'react-router-dom'
import '../css/login.css'



 function Login(props) {
    if (!props.auth.isLoaded) return null;

    if (props.auth.uid) props.history.push("/");
     

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        props.LoginWithEmail(email, password)

    }


    return (
        <div className='login-card'>
            <h1>Login</h1>
                 
            <form classname="form-inline" onSubmit={handleSubmit}>
  
  <div class="md-form mb-5">
              <input type="email" name='email' id="Form-email5" class="form-control validate white-text"/>
              <label data-error="wrong" data-success="right" for="Form-email5">Your email</label>
            </div>
  
  
            <div class="md-form pb-3">
              <input type="password" name='password' id="Form-pass5" class="form-control validate white-text"/>
              <label data-error="wrong" data-success="right" for="Form-pass5">Your password</label> 
             
            </div>
   
    <div className="form-check mb-2 mr-sm-2 remember-me">
      <input className="form-check-input" type="checkbox" id="inlineFormCheckMD"/>
      <label className="form-check-label" for="inlineFormCheckMD">
        Remember me
      </label>
    </div>
  
    <div class="text-center mb-3 col-md-12">
                <button type="submit" class="btn btn-success btn-block btn-rounded z-depth-1">Login</button>
              </div>
    OR <br></br>
  
    <button type="button" className="btn btn-primary btn-gplus btn-lg" onClick={props.LoginWithGoogle} >
        <i className="fab fa-google-plus-g"></i>
      </button> <br/> <br/> <br/>

     <span>Not a member?</span>

      <button className="buttons btn btn-primary btn-sm" id="">
        <Link id="link" to={`/register`}>
          <span className='edit-user'>Sign Up</span> 
        </Link>
      </button> 
  </form>
  

        </div>
    );
}

const mapStateToProps=(state) =>{
    return{
        auth:state.firebase.auth
    }
    
};

const mapDispatchToProps =  {
    LoginWithEmail,
    LoginWithGoogle
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
