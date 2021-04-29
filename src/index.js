import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import "./index.scss"

import config from '@arcgis/core/config';

config.assetsPath = './assets';

function Element () {
    const divELement = document.createElement("div");
    divELement.id = "root";
    document.documentElement.append(divELement);
    return divELement;
}

export default ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    Element()
)