import { createElement, reactDOM } from './react';
import { Header } from './components/header';
import  Layout  from './components/layout';
import "./main.css"
const App = () => {
    console.log(Layout())
    const main = createElement('div', null);
    const layout = createElement('div', null, Layout());
    main.appendChild(Header())
    main.appendChild(layout)
    return main;
}
reactDOM.render(App(), document.getElementById('root'));