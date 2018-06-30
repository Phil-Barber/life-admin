import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'

class TaskFormAdd extends React.Component {
  render() {
    return (
      <View style={styles.container} > 
        <MaterialIcons 
          name='add-circle-outline'
          size={70}
          color='grey'
          onPress={() => {this.props.navigation.navigate('TaskForm')}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    padding: 20
  }
})

export default withNavigation(TaskFormAdd)
