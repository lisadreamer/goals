import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { goalUpdate } from '../actions';
import { CardSection, Input } from './common';

class GoalForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="self discipline"
            value={this.props.name}
            onChangeText={value => this.props.goalUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Year"
            placeholder="2017"
            value={this.props.year}
            onChangeText={value => this.props.goalUpdate({ prop: 'year', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Reason"
            placeholder="Why?"
            value={this.props.reason}
            onChangeText={value => this.props.goalUpdate({ prop: 'reason', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Steps"
            placeholder="...concrete schedule"
            value={this.props.description}
            onChangeText={value => this.props.goalUpdate({ prop: 'description', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Web"
            placeholder="https://github.com"
            value={this.props.web}
            onChangeText={value => this.props.goalUpdate({ prop: 'web', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, reason, year, description, web } = state.goalForm;
  return { name, reason, year, description, web };
};

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default connect(mapStateToProps, { goalUpdate })(GoalForm);
