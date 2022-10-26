import React, {ComponentType} from "react";
import preloader from "../assets/images/Rocket.gif";


export function withAuthRedirect<T>(Component: ComponentType<T>) {
    return (props: any) => {
        return <React.Suspense fallback={<img src={preloader}/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}