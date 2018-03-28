import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SectionList
} from 'react-native';
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
          renderItem={({item}) => <Text>{item}</Text>}
          renderSectionHeader={({section}) => <Text>{section.key}</Text>}
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
