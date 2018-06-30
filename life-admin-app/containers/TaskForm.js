import React from 'react'
import {
  Text
} from 'react-native'
import { connect } from 'react-redux'

class TaskForm extends React.Component {
  render () {
    return <Text>Hi</Text>
  }
}

export default connect()(TaskForm)
