import { configureStore } from '@reduxjs/toolkit';
import chatReducers from './chatReducers/chatReducers';
import dashboardReducer from './dashboard/dashboardReducer';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    chat: chatReducers,
  }
})