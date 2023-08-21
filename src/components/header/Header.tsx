import React from 'react';
import style from "./Header.module.css"

export const Header = () => {
    return (
        <header className={style.header}>
            <svg fill="white" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m29.2856 16.5652c.8223-3.069-.9989-6.2235-4.0679-7.04581m-6.0511 20.48051c-5 8.3333-9.16668-5-13.33334 4.1667m26.98094-15.955c-.988 3.687-6.7898 8.5452-10.4752 11.3259-1.6055 1.2114-3.8541.6089-4.6388-1.243-1.8012-4.2508-4.3967-11.359-3.4088-15.0461 1.4673-5.47598 6.8032-8.8041 11.9182-7.43356 5.1149 1.37054 8.0719 6.92076 6.6046 12.39676z" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </header>
    );
};
