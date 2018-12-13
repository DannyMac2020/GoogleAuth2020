import axios from 'axios';
import { FETCH_USER, FETCH_CHANNELS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchChannels = () => async dispatch => {
  const res = await axios.get('/api/channels');

  dispatch({ type: FETCH_CHANNELS, payload: res.data.items });
};
