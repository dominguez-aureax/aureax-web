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
    <BrowserRouter>
      <div className='app'>
        <h1>Application</h1>
        <Switch>
          <Route exact path='/' component={() => <Login setToken={setToken} />} />
          <Route path='/signup' component={SignUp} />
          <Route path='/preferences' component={Preferences} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
