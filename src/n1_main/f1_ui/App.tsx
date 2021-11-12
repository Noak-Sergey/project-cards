import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Routes} from "./routes/Routes";
import {Header} from "./header/Header";
import {store} from "../f2_bll/store";

export const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <Header />
          <Routes />
        </Provider>
      </HashRouter>

    </div>
  );
}

