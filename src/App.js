import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { useToken } from './components';
import { Dashboard, Home, Login, Preferences, SignUp } from './pages';
import { AuthProvider } from './contexts/auth_context';
function App() {
  /* eslint-disable */
  const { token, setToken } = useToken();

  return (
    <Container className='align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <div className='w-100'>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={() => <Login setToken={setToken} />} />
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
