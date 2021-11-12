import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

export const App = () => {
  return (
    <div className="App">
      <HashRouter>
        {/*<Provider store={store}>*/}
        {/*  /!*<Header />*!/*/}
        {/*  /!*<Routes />*!/*/}
        {/*</Provider>*/}
      </HashRouter>

    </div>
  );
}

