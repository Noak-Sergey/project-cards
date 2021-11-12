import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Rout} from "./routes/Routes";
import {Header} from "./header/Header";
import {store} from "../f2_bll/store";

export const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <Header />
          <Rout />
        </Provider>
      </HashRouter>

    </div>
  );
}

