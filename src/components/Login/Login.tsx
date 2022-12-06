import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../Validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../Redux/reduxStore";
import s from "../common/FormsControls/FormsControls.module.css"
import {FC} from "react";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth?: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" placeholder={"Email"} validate={[required]} name={"email"} component={Input}/>
        </div>
        <div>
            <Field type="password" placeholder={"Password"} validate={[required]} name={"password"} component={Input}/>
        </div>
        <div>
            <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
        </div>

        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

const Login:FC<LoginType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <p>
            To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                        target={'_blank'}>here</a>
        </p>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: StoreType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)