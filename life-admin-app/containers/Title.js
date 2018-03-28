import React from 'react';
import { 
  StyleSheet, 
  Text 
} from 'react-native';

class Title extends React.Component {
  render() {
    return (
      <Text style={{
        color:'gray',
        fontWeight: 'bold',
        fontSize:35
      }}>
        {this.toTitleCase(this.props.children)}
      </Text>
     );
  }

  toTitleCase(str) {
    return str.replace(
      /\w\S*/g, 
      function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
}

export default Title;
