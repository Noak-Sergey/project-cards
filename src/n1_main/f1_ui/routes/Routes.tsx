import React from "react";
import { Route, Routes } from "react-router-dom";
import {LogIn} from "../login/LogIn";
import {NewPassword} from "../newPassword/NewPassword";
import {Profile} from "../profile/Profile";
import {Error404} from "../error/Error404";
import {Registration} from "../registration/Registration";
import {PasswordRecovery} from "../passwordRecovery/PasswordRecovery";
import {TestComponent} from "../testComponent/TestComponent";

export const Path = {
    LogIn: "/login",
    Registration: "/registration",
    Profile: "/profile",
    PasswordRecovery: "/passwordRecovery",
    NewPassword: "/newPassword",
    TestComponents : "/TestComponents",
    Error404: "/404",
}

export const Rout = () => {
    return (
        <div>
            <Routes>
                {/*<Route  path={"/"} exact element={ <div>Empty page</div>} />*/}
                <Route path={Path.LogIn} element= {<LogIn/>} />
                <Route path={Path.Registration} element= {<Registration/>} />
                <Route path={Path.Profile} element= {  <Profile/>} />
                <Route path={Path.PasswordRecovery} element= { <PasswordRecovery/>} />
                <Route path={Path.NewPassword} element= { <NewPassword/>} />
                <Route path={Path.TestComponents} element= { <TestComponent />} />
                <Route path={Path.Error404} element= { <Error404/>} />
                {/*<Redirect from={"*"} to={Path.Error404} />*/} // Ошибка импорта редиректа
            </Routes>
        </div>
    );
};