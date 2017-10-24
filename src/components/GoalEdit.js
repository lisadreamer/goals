import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { goalUpdate, goalSave, goalDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import GoalForm from './GoalForm';

class GoalEdit extends Component {
  state = {
    showModal: false
  };

  componentWillMount() {
    _.each(this.props.goal, (value, prop) => {
      this.props.goalUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, year, reason, description, web } = this.props;
    this.props.goalSave({ name, reason, year, description, web, uid: this.props.goal.uid });
  }

  onTextPress() {
    const phone = '+358413671290';
    const { description, year, name } = this.props;
    Communications.text(phone,`For achieving your goal "${name}" do: ${description} -- goal ${year}` );
  }

  onWebPress() {
    const { web } = this.props;
    Communications.web(`${web}`);
  }

  onAccept() {
    this.props.goalDelete({ uid: this.props.goal.uid });
  }

  onDecline() {
    this.setState({ showModal: false });
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
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text me schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onWebPress.bind(this)}>
            Go to website
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, year, reason, description, web } = state.goalForm;
  return { name, year, reason, description, web };
};

export default connect(mapStateToProps, { goalUpdate, goalSave, goalDelete })(GoalEdit);
