import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css"

type DialogItemType = {
    id: string
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;

    return (<div className={s.dialog}>
        <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>);
}

