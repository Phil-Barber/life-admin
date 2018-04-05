import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class TaskFocus extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    const params = navigation.state.params || {};
    
    let headerRight = params.headerRight || <MaterialIcons
      name='mode-edit' 
      size={25} 
    />;

    return {
      headerRight
    }
  }

  componentWillMount() {
    this._setHeaderBarParams();
  }
  
  _setHeaderBarParams() {
    let headerRight = <MaterialIcons 
      name='mode-edit' 
      size={25} 
      onPress={()=> {}}
    />;
  
    this.props.navigation.setParams({
      headerRight
    });
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <Text style={styles.title} >{params.taskTitle}</Text>
        <Text>
          <Text style={styles.section} >Last Completed: </Text>
          <Text>12/03/18</Text>
          
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title : {
    fontSize : 30
  },
  section : {
    fontWeight: 'bold'
  }
});

export default TaskFocus;
