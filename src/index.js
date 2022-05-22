import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { put, takeEvery } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';


function* fetchBooks(action) {
    const response = yield axios({
      method: 'GET',
      url: `/books`
    });
    yield put({
      type: 'NEW_BOOKS',
  
    })
  }

const books = (state = [], action) => {
    if (action.type === 'NEW_BOOKS') {
      console.log('array of books:', action.payload)
      return action.payload
    }
    return state
  }


function* rootSaga() {
    yield takeEvery('GET_BOOKS', fetchBooks)
  }
  
  

  const sagaMiddleware = createSagaMiddleware();
const storeInstance = createStore(
    combineReducers({
      books
    }),
    applyMiddleware(logger,sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(<Provider 
store={storeInstance}
><App /></Provider>, 
    document.getElementById('root'));
// registerServiceWorker();
