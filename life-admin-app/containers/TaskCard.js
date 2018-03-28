import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import Swipeout from 'react-native-swipeout';

class TaskCard extends React.Component {
  render() {
    let swipeBtns = [{
      text: 'Complete',
      backgroundColor: 'transparent',
      color: 'green'
    }];

    return (
      <Swipeout 
        right={swipeBtns} 
        autoClose={true} 
        backgroundColor='transparent'
      >
        <View style={[styles.container, styles.card]}>
          <Text style={styles.title} >{this.props.title}</Text>
          <Text> 
            <Text style={styles.details} >
              Extra details about the Task
            </Text>
            <Text>date?</Text>
          </Text>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    }
  },
  title: {
    fontSize:25
  },
  details: {
    fontSize:20
  }
});

export default TaskCard;