import React from 'react'
import { Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'

class HeaderRight extends React.Component {
  render () {
    return (this.props.editing)
      ? (
        <Text
          onPress={this.props.onPress}
        >
          Done
        </Text>
      ) : (
        <MaterialIcons
          name='mode-edit'
          size={25}
          onPress={this.props.onPress}
        />
      )
  }
}

function mapStateToProps (state) {
  const editing = state.editTask.task || false
  return {editing}
}

export default connect(mapStateToProps)(HeaderRight)
