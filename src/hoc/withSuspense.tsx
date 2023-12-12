import React, {ComponentType} from "react";
import {Preloader} from "../components/common/preloader/Preloader";

export function withSuspense<T>(Component: ComponentType<T>) {
    return (props:T) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props as T}/>
        </React.Suspense>
    }
}