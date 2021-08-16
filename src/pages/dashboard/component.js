import React from 'react';
import { Button } from 'react-bootstrap';

import { useAuth } from '../../contexts/auth_context';

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <Button variant='primary' type='submit' onClick={logout}>
        Sign Out
      </Button>
    </div>
  );
}
