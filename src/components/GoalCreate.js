import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalUpdate, goalCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import GoalForm from './GoalForm';

class GoalCreate extends Component {

  onButtonPress() {
    const { name, year, reason, description, web } = this.props;
    this.props.goalCreate({ name, reason, year: year || '2017', description, web });
  }

  render() {
    return (
      <Card>
        <GoalForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, year, reason, description, web } = state.goalForm;
  return { name, year, reason, description, web };
};

export default connect(mapStateToProps, { goalUpdate, goalCreate })(GoalCreate);
