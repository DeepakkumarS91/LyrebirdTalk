import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {postGenarateReducer, voiceReducer} from './components/Reducer/Reducer';
import App from './App';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({voiceReducer,postGenarateReducer});
let store =createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
