import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { db } from './firebase';

import './App.scss';

import { PrivateRoute } from './components';
import { Dashboard, Login, Members, NotFound, Preferences, SignUp } from './pages';
import { AuthContext } from './contexts/auth_context';
function App() {
  return (
    <div className='App align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <BrowserRouter>
        <AuthContext>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path='/members'>
              <Members db={db} />
            </Route>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/preferences' component={Preferences} />
            <Route component={NotFound} />
          </Switch>
        </AuthContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
