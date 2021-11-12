import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
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

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={"/"} render={() => <div>Empty page</div>} />
                <Route path={Path.LogIn} render={() => <LogIn/>} />
                <Route path={Path.Registration} render={() => <Registration/>} />
                <Route path={Path.Profile} render={() => <Profile/>} />
                <Route path={Path.PasswordRecovery} render={() => <PasswordRecovery/>} />
                <Route path={Path.NewPassword} render={() => <NewPassword/>} />
                <Route path={Path.TestComponents} render={() => <TestComponent />} />
                <Route path={Path.Error404} render={() => <Error404/>} />
                <Redirect from={"*"} to={Path.Error404} />
            </Switch>
        </div>
    );
};