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
import { fetchTasksIfNeeded } from '../actions/actions';

class TaskFeed extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title : 'Life Admin'
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchTasksIfNeeded());
  }

  render() {
    const tasks = this.props.tasks;
    return (
      <View style={styles.app}>
        <SectionList 
          renderSectionHeader={({section}) => {
            return <Title>{section.key}</Title>;
          }}
          renderItem={({item}) => {
            return (
              <TaskCard 
                task={item}
                navigation={this.props.navigation} 
              />
            );
          }}
          sections={[
            {key:'due', data: tasks.due},
            {key:'upcoming', data: tasks.upcoming},
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
  const { tasks } = state;
  return { tasks };
}

export default connect(mapStateToProps)(TaskFeed);
