import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Box from './Box';

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Box style={{backgroundColor: 'darksalmon', flex: 1}} />
        <Box style={{backgroundColor: 'salmon', flex: 2}} />
        <Box style={{backgroundColor: 'peachpuff', flex: 1}} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Home;
