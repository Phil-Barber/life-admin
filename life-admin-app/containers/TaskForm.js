import { Component } from 'react'
import {
  Text
} from 'react-native'
import { connect } from 'react-redux'

class TaskForm extends Component {
  render () {
    return <Text>Hi</Text>
  }
}

export default connect()(TaskForm)
