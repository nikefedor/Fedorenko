import reportWebVitals from './reportWebVitals';
import store from './redux/store'
// import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (State) => {
  root.render(
    <React.StrictMode>
      <App appState={State} dispatch={store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// store.subscribe(() =>{
//   let State = store.getState();
//   rerenderEntireTree(State)
// })
;



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
