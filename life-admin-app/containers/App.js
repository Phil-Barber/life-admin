import React from 'react'
import {
  StackNavigator
} from 'react-navigation'
import TaskFeed from './TaskFeed'
import TaskFocus from './TaskFocus'
import TaskForm from './TaskForm'

const RootStack = StackNavigator(
  {
    TaskFeed: { screen: TaskFeed },
    TaskFocus: { screen: TaskFocus },
    TaskForm: { screen: TaskForm }
  },
  {
    initialRouteName: 'TaskFeed',
    navigationOptions: {
      headerStyle: {
        padding: 10
      }
    }
  }
)

export default class App extends React.Component {
  render () {
    return <RootStack />
  }
}
