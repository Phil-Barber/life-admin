import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { updateTaskTitle } from '../../actions/actions'

class Title extends React.Component {
  render () {
    return (this.props.editing) ? this._renderEdit() : this._render()
  }

  _render () {
    return <Text style={styles.title} >{this.props.text}</Text>
  }

  _renderEdit () {
    return (
      <TextInput
        style={styles.title}
        defaultValue={this.props.text}
        onChangeText={this._updateText.bind(this)}
      />
    )
  }

  _updateText (text) {
    this.props.dispatch(updateTaskTitle(text))
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  }
})

export default connect()(Title)
