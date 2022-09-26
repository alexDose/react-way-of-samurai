import s from "./FormsControls.module.css"
import {FC} from "react";

export const Textarea: FC<any> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input: FC<any> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}