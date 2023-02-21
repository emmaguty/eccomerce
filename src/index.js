import {React, StrictMode} from 'react';
import {render} from 'react-dom';

import { StateProvider } from './stateProvider';

import './index.css';

import App from './App';
import reducer, { initialState } from './reducer';


const rootElement = document.getElementById('root');

render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);

