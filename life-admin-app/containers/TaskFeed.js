import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SectionList
} from 'react-native';
import Title from './Title';
import TaskCard from './TaskCard';
import { connect } from 'react-redux';

class TaskFeed extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title : 'Life Admin'
    }
  }

  render() {
    return (
      <View style={styles.app}>
        <SectionList 
          renderSectionHeader={({section}) => {
            return <Title>{section.key}</Title>;
          }}
          renderItem={({item}) => {
            return <TaskCard title={item} />
          }}
          sections={[
            {key:'due', data: ['task1', 'task2']},
            {key:'upcoming', data: ['task3', 'task4', 'task5']},
          ]}
          keyExtractor={(item, index) => index}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  container: {
    flex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {

  return { 
  };
}

export default connect(mapStateToProps)(TaskFeed);
