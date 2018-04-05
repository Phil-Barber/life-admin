import React from 'react';
import { 
  StackNavigator
} from 'react-navigation';
import TaskFeed from './TaskFeed';
import TaskFocus from './TaskFocus';

const RootStack = StackNavigator(
  {
    TaskFeed : { screen: TaskFeed },
    TaskFocus : { screen: TaskFocus }
  },
  {
    initialRouteName: 'TaskFeed',
    navigationOptions: {
      headerStyle: {
        padding:10
      }
    } 
  }
);

export default class App extends React.Component {
  render() {
     return <RootStack />;
  }
}

