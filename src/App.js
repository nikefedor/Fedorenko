import React from "react";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Divbar from "./components/Divbar/Divbar";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        
        <div class='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' 
              element= {<Dialogs store={props.store} />} />
            <Route path='/Profile' 
              element= {<Divbar postPage={props.appState.postPage} 
              dispatch={props.dispatch} />}/>
          </Routes>

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
