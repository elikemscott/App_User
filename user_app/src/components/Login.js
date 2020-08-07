import React from 'react';
import {connect} from 'react-redux';
import { LoginWithEmail, LoginWithGoogle } from '../store/authAction';



 function Login(props) {
     

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        props.LoginWithEmail(email, password)

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Login</h1>

<di>
    <label>Email</label>
    <input name='email' type='email' placeholder='Email'/>
</di>
<di>
    <label>Password</label>
    <input name='password' type='password' placeholder='Password'/>
</di>
<hr/>

<button type='submit'>Login</button>

<hr></hr>

<button onClick={props.LoginWithGoogle}>
    <img src='https://cdn.vox-cdn.com/thumbor/E9RM8-qg-iyLEAzP4d7tobqI09o=/0x0:2012x1341/1400x933/filters:focal(0x0:2012x1341):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg' alt='google button' width='100px'/>
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
