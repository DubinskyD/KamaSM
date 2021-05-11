import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Login = (props) => {
   const onSubmit = (FormData) => {

   }
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component="input" placeholder={"Login"} name={"login"} />
         </div>
         <div>
            <Field component="input" placeholder={"Password"} name={"password"} />
         </div>
         <div>
            <Field component="input" type={"checkbox"} name={"rememberMe"} />Remember me
            </div>
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


export default Login;