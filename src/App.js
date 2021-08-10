import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { useToken } from './components';
import { Dashboard, Login, Preferences, SignUp } from './pages';
function App() {
  /* eslint-disable */
  const { token, setToken } = useToken();

  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <BrowserRouter>
        <header />
        <Switch>
          <Route exact path='/' component={() => <Login setToken={setToken} />} />
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/preferences'>
            <Preferences />
          </Route>
          <Route path='/signup' component={() => <SignUp />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
