import React from 'react';
import { 
  StackNavigator
} from 'react-navigation';
import TaskFeed from './TaskFeed';

const RootStack = StackNavigator(
  {
    TaskFeed : { screen: TaskFeed }
  },
  {
    initialRouteName: 'TaskFeed',
    navigationOptions: ({ navigation }) => {
      return {title: 'whatsup'}
    }
  }
);

export default class App extends React.Component {
  render() {
     return <RootStack />;
  }
}

