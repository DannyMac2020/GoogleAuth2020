import { FETCH_CHANNELS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CHANNELS:
      return action.payload;
    default:
      return state;
  }
}
