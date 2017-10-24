import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {
  GOAL_UPDATE,
  GOAL_CREATE,
  GOAL_FETCH_SUCCESS,
  GOAL_SAVE_SUCCESS
} from './types';

export const goalUpdate = ({ prop, value }) => {
  return {
    type: GOAL_UPDATE,
    payload: { prop, value }
  };
};

export const goalCreate = ({ name, year, reason, description, web }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/goals`)
      .push({ name, year, reason, description, web })
      .then(() => {
        dispatch({ type: GOAL_CREATE });
        Actions.goalList({ type: 'reset' });
       });
  };
};

export const goalsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/goals`)
      .on('value', snapshot => {
        dispatch({ type: GOAL_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const goalSave = ({ name, reason, year, description, web, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/goals/${uid}`)
      .set({ name, reason, year, description, web })
      .then(() => {
        dispatch({ type: GOAL_SAVE_SUCCESS })
        Actions.goalList({ type: 'reset' });
      });
  };
};

export const goalDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`users/${currentUser.uid}/goals/${uid}`)
      .remove()
      .then(() => {
        Actions.goalList({ type: 'reset' });
      });
  };
};
