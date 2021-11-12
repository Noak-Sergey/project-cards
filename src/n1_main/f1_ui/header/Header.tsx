import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'
import {Path} from "../routes/Routes";

export const Header = () => {

    return (
        <div className={s.div}>
            <div className={s.item}>
                <NavLink to={Path.LogIn}  activeClassName={s.active}>
                    Log in
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={Path.Registration} activeClassName={s.active}>
                    Registration
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={Path.Profile} activeClassName={s.active}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={Path.PasswordRecovery} activeClassName={s.active}>
                    Reset password
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={Path.NewPassword} activeClassName={s.active}>
                    Create new password
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={Path.TestComponents} activeClassName={s.active}>
                    SuperComponents
                </NavLink>
            </div>
        </div>
    );
};
