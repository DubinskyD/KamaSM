import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../redux/reducers/auth-reducer';
import style from "../../common/FormsControls/FormsControls.module.css"

const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)
   }

   if (props.isAuth) {
      return <Redirect to={"/profile"} />
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
            <Field component={Input}
               placeholder={"Email"}
               name={"email"}
               validate={[required]}
            />
         </div>
         <div>
            <Field component={Input}
               placeholder={"Password"}
               name={"password"}
               type={"password"}
               validate={[required]}
            />
         </div>
         <div>
            <Field component={Input}
               type={"checkbox"}
               name={"rememberMe"} />Remember me
         </div>

         {props.error && <div className={style.summaryError} >
            {props.error}
         </div>}

         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);