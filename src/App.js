import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { PrivateRoute } from './components';
import { Dashboard, Login, Preferences, SignUp } from './pages';
import { AuthProvider } from './contexts/auth_context';
function App() {
  return (
    <Container className='align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <div className='w-100'>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path='/preferences' component={Preferences} />
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
