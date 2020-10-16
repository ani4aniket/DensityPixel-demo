import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Box(props) {
  return <View style={[styles.box, props.style]}></View>;
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
});
