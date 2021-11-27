import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import {Provider} from "react-redux";
import store from "../../store/store";
import {Routing} from "../../routing";

export const App = ():JSX.Element => {
  return (
    <div className="App">
      <Provider store={store}>
      <Routing />
      <GlobalStyles />
      </Provider>
    </div>
  );
}