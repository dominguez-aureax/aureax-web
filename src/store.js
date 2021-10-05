import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './contexts/auth_context';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
