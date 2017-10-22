import { GOAL_UPDATE, GOAL_CREATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  year: '',
  reason: '',
  description: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOAL_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case GOAL_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
