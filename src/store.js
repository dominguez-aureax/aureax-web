import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './contexts/auth_context';
import { membersReducer } from './pages';

export default configureStore({
  reducer: {
    auth: authReducer,
    membersPage: membersReducer,
  },
});
