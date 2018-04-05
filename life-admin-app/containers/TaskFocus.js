import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Title from './TaskFocus/Title';
import LastCompleted from './TaskFocus/LastCompleted';
import Recurrence from './TaskFocus/Recurrence';

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
        <Title text={params.taskTitle} />
        <LastCompleted date='12/03/2107' styles={styles} />
        <Recurrence mode='weeks' n={3} styles={styles} />
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

export default TaskFocus;
