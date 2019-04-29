import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import store from './utils/store';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider
        store={store}>
        <App />
    </Provider>
        , document.getElementById('root')
);

serviceWorker.unregister();
