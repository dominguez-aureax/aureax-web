import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

import { PrivateRoute } from './components';
import { Dashboard, Login, NotFound, Preferences, SignUp } from './pages';
import { AuthProvider } from './contexts/auth_context';
function App() {
  return (
    <div className='App align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/preferences' component={Preferences} />
            <Route path='/dashboard' component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
