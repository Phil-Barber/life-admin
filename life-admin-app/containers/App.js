import React from 'react';
import { Button } from 'react-native';
import { 
  StackNavigator
} from 'react-navigation';
import TaskFeed from './TaskFeed';
import TaskFocus from './TaskFocus';
import TaskForm from './TaskForm';

const RootStack = StackNavigator(
  {
    TaskFeed : { screen: TaskFeed },
    TaskFocus : { screen: TaskFocus },
    TaskForm : { screen: TaskForm }
  },
  {
    initialRouteName: 'TaskFeed',
    navigationOptions: {
      headerRight: <Button title='hello' onPress={() => newTask()} />,
      headerStyle: {
        padding:10
      }
    } 
  }
);

// TODO How to navigate from here?
function newTask() {
    this.props.navigation.navigate('TaskForm');
  }

export default class App extends React.Component {
  render() {
     return <RootStack />;
  }
}

