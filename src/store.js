import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './contexts/auth_context';
import { membersReducer, signUpReducer } from './pages';

export default configureStore({
  reducer: {
    Auth: authReducer,
    MembersPage: membersReducer,
    SignUpPage: signUpReducer,
  },
});
