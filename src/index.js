import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Count from "./Count";
import LoginToggle from "./LoginToggle";
import ApiCalls from "./Api";

ReactDOM.render(
    <div>
        {/*<App/>*/}
        {/*<Count/>*/}
        {/*<LoginToggle/>*/}
        <ApiCalls/>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
