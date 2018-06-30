import React from 'react'
import {
  View,
  Text,
  Picker,
  TextInput
} from 'react-native'
import { connect } from 'react-redux'
import {
  updateTaskRecurrenceN,
  updateTaskRecurrenceMode
} from '../../actions/actions'

class Recurrence extends React.Component {
  render () {
    const {styles, recurrence} = this.props
    let n = recurrence.n
    let mode = recurrence.mode

    return (this.props.editing)
      ? this._renderEdit(styles, mode, n)
      : this._render(styles, mode, n)
  }

  _render (styles, mode, n) {
    return (
      <Text>
        <Text style={styles.sectionHeader} >Repeats: </Text>
        <Text style={styles.sectionBody} >
          {this._renderPeriod(mode, n)}
        </Text>
      </Text>
    )
  }

  _renderPeriod (mode, n) {
    return 'Every ' + n + ' ' + mode
  }

  _renderEdit (styles, mode, n) {
    return (
      <View style={{flexDirection: 'row'}} >
        <TextInput
          style={{flex: 1}}
          keyboardType='numeric'
          defaultValue={n.toString()}
          onChangeText={this._updateCount.bind(this)}
        />
        <Picker
          style={{flex: 1}}
          selectedValue={mode}
          onValueChange={this._updateMode.bind(this)}
        >
          <Picker.Item label='Days' value='days' />
          <Picker.Item label='Weeks' value='weeks' />
          <Picker.Item label='Months' value='months' />
          <Picker.Item label='Years' value='years' />
        </Picker>
      </View>
    )
  }

  _updateCount (n) {
    this.props.dispatch(updateTaskRecurrenceN(n))
  }

  _updateMode (value, position) {
    this.props.dispatch(updateTaskRecurrenceMode(value))
  }
}

export default connect()(Recurrence)
