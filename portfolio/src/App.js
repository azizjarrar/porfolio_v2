import React from 'react';
import WelcomePage from './WelcomePage/WelcomePage'
import Aboutme from './aboutme/aboutme'
import Contactme from './contactme/contactme'
import Myskills from './myskills/myskills'
import {Route,Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(props)=> <WelcomePage {...props}/>}></Route>
        <Route exact path='/Aboutme' render={(props)=> <Aboutme {...props}/>}></Route>
        <Route exact path='/Contactme' render={(props)=> <Contactme {...props}/>}></Route>
        <Route exact path='/Myskills' render={(props)=> <Myskills {...props}/>}></Route>
        </Switch>
    </div>
  );
}

export default App;
