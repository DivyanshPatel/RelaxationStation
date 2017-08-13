

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


class QuoteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      <Text style={styles.readyText}> "{this.props.text}" </Text>
      <Text style={styles.readyText}> -{this.props.sourceText} </Text>

      
    
      </View>
    );
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  sourceText: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161737',
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff',
    marginBottom: 20
  },
});

export default QuoteScreen
