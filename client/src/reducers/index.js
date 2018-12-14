import { combineReducers } from 'redux';
import authReducer from './authReducer';
import channelsReducer from './channelsReducer';

export default combineReducers({
  auth: authReducer,
  channels: channelsReducer
});
