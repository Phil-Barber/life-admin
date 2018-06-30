import React from 'react'
import { Text } from 'react-native'

class LastCompleted extends React.Component {
  render () {
    const styles = this.props.styles
    return (
      <Text>
        <Text style={styles.sectionHeader} >Last Completed</Text>
        <Text style={styles.sectionBody} >
          {this.renderDate(this.props.date)}
        </Text>
      </Text>
    )
  }

  renderDate (date) {
    return date
  }
}

export default LastCompleted
