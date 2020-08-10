import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import {Navbar} from './components/Navbar';
import {MonthsPage }from './pages/MonthsPage';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <div className="container">
          <Switch>
            <Route component = {UsersPage} path = "/" exact />
            <Route component = {MonthsPage} path = "/months" />
          </Switch>
       </div>
    </BrowserRouter>
   
  );
}

export default App;
