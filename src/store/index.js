import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducers from './reducer';

export default createStore(rootReducers, devToolsEnhancer());