import { GOAL_UPDATE, GOAL_CREATE, GOAL_SAVE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  year: '',
  reason: '',
  description: '',
  web: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOAL_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case GOAL_CREATE:
      return INITIAL_STATE;
    case GOAL_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
