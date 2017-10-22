import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import GoalList from './components/GoalList';
import GoalCreate from './components/GoalCreate';
import GoalEdit from './components/GoalEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" initial />
      </Scene>
      <Scene key="main">
        <Scene
          key="goalList" component={GoalList} title="My goals"
          rightTitle="Add" onRight={() => Actions.goalCreate()} initial
        />
        <Scene key="goalCreate" component={GoalCreate} title="Create dream goal" />
        <Scene key="goalEdit" component={GoalEdit} title="Edit goal" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
