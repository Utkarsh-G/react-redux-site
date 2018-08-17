console.log("Taste of Danforth! Tasty...");

import React from 'react'; 
import ReactDOM from 'react-dom';
import { AppWrapper } from "./App";
import { store } from './store';
import {Provider} from 'react-redux'; // provider can provide a redux store to some components, see below
//import default syntax is for importing older modules into our programme

ReactDOM.render(
    <div>
        <Provider store={store}>
        <AppWrapper/>
        </Provider>
    </div>,
    AppContainer
);

    // AppContainer
    //document.getElementById("AppContainer")
    // document.getElementById("AppContainer") is shortcut to AppContainer here