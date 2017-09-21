import React from 'react';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-widgets/dist/css/react-widgets.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {
  BrowserRouter as Router
} from 'react-router-dom'

import moment from 'moment'
import momentLocalizer from 'react-widgets-moment'

moment.locale('en')
momentLocalizer()

const store = configureStore();

render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


