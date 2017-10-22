import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalUpdate, goalSave } from '../actions';
import { Card, CardSection, Button } from './common';
import GoalForm from './GoalForm';

class GoalEdit extends Component {

  componentWillMount() {
    _.each(this.props.goal, (value, prop) => {
      this.props.goalUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, year, reason, description } = this.props;
    this.props.goalSave({ name, reason, year, description, uid: this.props.goal.uid });
  }

  render() {
    return (
      <Card>
        <GoalForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, year, reason, description } = state.goalForm;
  return { name, year, reason, description };
};

export default connect(mapStateToProps, { goalUpdate, goalSave })(GoalEdit);
