import React from 'react'
import {
  View,
  StyleSheet,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import Title from './TaskFocus/Title'
import Recurrence from './TaskFocus/Recurrence'

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
    
  }
}

const styles = StyleSheet.create({
  sectionHeader : {
    fontWeight: 'bold'
  }, 
  button: {
  }
})

export default connect()(TaskForm)
