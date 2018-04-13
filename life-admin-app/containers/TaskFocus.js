import React from 'react';
import {
Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Title from './TaskFocus/Title';
import LastCompleted from './TaskFocus/LastCompleted';
import Recurrence from './TaskFocus/Recurrence';
import HeaderRight from './TaskFocus/HeaderRight';
import { connect } from 'react-redux';
import { editOrSubmitTask } from '../actions/actions';

class TaskFocus extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const params = navigation.state.params || {};

    let headerRight = params.headerRight || <HeaderRight />;

    return {
      headerRight
    }
  }

  componentWillMount() {
    this._setHeaderBarParams();
  }
  
  _setHeaderBarParams() {
    let headerRight = <HeaderRight 
      onPress={this._toggleEdit.bind(this)} 
    />
  
    this.props.navigation.setParams({
      headerRight
    });
  }

  _toggleEdit() { 
    let editing = (this.props.editing)
      ? null
      : this.props.navigation.state.params.task;
    this.props.dispatch(editOrSubmitTask(editing));
  }

  render() {
    const { params } = this.props.navigation.state;
    const task = params.task;
    const editing = this.props.editing;

    return (
      <View>
        <Title text={task.title} editing={editing} />
        <LastCompleted 
          date={task.lastCompleted} 
          styles={styles} 
          editing={editing} 
        />
        <Recurrence 
          recurrence={task.recurrence}
          styles={styles} 
          editing={editing} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader : {
    fontWeight: 'bold'
  }, 
  sectionBody: {
  }
});

function mapStateToProps(state) {
  const editing = state.editTask.task || false;
  return {editing};
}

export default connect(mapStateToProps)(TaskFocus);
