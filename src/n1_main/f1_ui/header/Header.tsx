import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'
import {Path} from "../routes/Routes";

export const Header = () => {

    return (
        <div className={s.div}>
            <div className={s.item}>
                <NavLink to={Path.LogIn}  >
                    Log in
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={Path.Registration} >
                    Registration
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={Path.Profile} >
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={Path.PasswordRecovery} >
                    Reset password
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={Path.NewPassword} >
                    Create new password
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={Path.TestComponents} >
                    SuperComponents
                </NavLink>
            </div>
        </div>
    );
};
