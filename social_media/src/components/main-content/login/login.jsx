import React from 'react';
import { reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { createField, Input } from '../../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../redux/reducers/auth-reducer';
import style from "../../common/FormsControls/FormsControls.module.css";
import s from "../login/login.module.css";

const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
   }
   if (props.isAuth) {
      return <Redirect to={"/profile"} />
   }

   return (
      <div>
         <h1 >Login</h1>
         <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </div>
   )
}

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
   console.log(captchaUrl);
   return (
      <form onSubmit={handleSubmit} className={s.text}>
         {createField("Email", "email", [required], Input, {})}
         {createField("Password", "password", [required], Input, { type: "password" })}
         {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "Remember me", s.rememberMe)}

         {captchaUrl && <img src={captchaUrl} alt="#" />}
         {captchaUrl && createField("Symbols from img", "captcha", [required], Input, {})}


         {error && <div className={style.summaryError} >
            {error}
         </div>}

         <div>
            <button className={s.button}>Here goes!</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login);