import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "../src/redux/store";
import AppContainer from "./components/AppContainer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
