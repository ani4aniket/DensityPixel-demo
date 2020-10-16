import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  listenToOrientationChanges,
  removeOrientationChanges,
  widthToDp,
  getDynamicStyles,
} from './Responsive';

const SFCApp = () => {
  const [orientation, setOrientation] = useState('');

  const ps = portraitStyles();
  const ls = landscapeStyles();

  useEffect(() => {
    listenToOrientationChanges(setOrientation);
    return () => {
      removeOrientationChanges();
    };
  }, [orientation]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={ps.container}>
        <View style={getDynamicStyles(ps.view, ls.view)}>
          <Text style={ps.text}>React Native</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const portraitStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    view: {
      backgroundColor: 'lightblue',
    },
    text: {
      fontSize: widthToDp('10%'),
    },
  });
};

const landscapeStyles = () => {
  return StyleSheet.create({
    view: {
      backgroundColor: 'red',
    },
    // text: {
    //   fontSize: widthToDp('3%'),
    // },
  });
};

export default SFCApp;
