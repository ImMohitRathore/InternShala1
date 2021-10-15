import React, { createContext } from 'react'
import Login from './Component/Login'
import Data from "./Component/Data"
import Register from "./Component/Register"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './Component/Nav'

const App = () => {
 
  return (
    <>
    
     <Switch>
       <Route component= {Login} path="/" exact  />
    
    <Route component= {Nav} exact path= "/nav"/>
       <Route  component={Data} path="/data" exact/>
       <Route component={Register} path="/register" exact />
     </Switch>
    </>
  )
}

export default App
