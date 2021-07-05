import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./Component1";

import "./index.css";

const App = () => (
    <div>
        <Component1/>
    </div>
);

ReactDOM.render(
    <App/>
    , document.getElementById("app"));
