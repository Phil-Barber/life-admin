import React from 'react'
import {
  View,
  StyleSheet,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import Title from './TaskFocus/Title'
import Recurrence from './TaskFocus/Recurrence'
import { createTask } from '../actions/actions'

class TaskForm extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title : 'New Task'
    }
  }

  render () {
    return (
      <View>
        <Title editing={true} text='Task title' />
        <Recurrence 
          styles={styles} 
          recurrence={{n:1, mode:'days'}} 
          editing={true}
        />
        <Button 
          title='Create' 
          onPress={() => this._createTask()}
        />
      </View>
    )
  }

  _createTask () {
    this.props.dispatch(createTask(this.props.task))   
    this.props.navigation.navigate('TaskFeed')
  }
}

const styles = StyleSheet.create({
  sectionHeader : {
    fontWeight: 'bold'
  }, 
  button: {
  }
})

function mapStateToProps(state) {
  const task = state.editTask.task
  return { task }
}

export default connect(mapStateToProps)(TaskForm)
