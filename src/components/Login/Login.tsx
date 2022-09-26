import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../Validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" placeholder={"Login"} validate={[required]} name={"login"} component={Input}/>
        </div>
        <div>
            <Field type="text" placeholder={"Password"} validate={[required]} name={"password"} component={Input}/>
        </div>
        <div>
            <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
