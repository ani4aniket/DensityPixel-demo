import React, {Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  listenToOrientationChanges,
  removeOrientationChanges,
  widthToDp,
  getDynamicStyles,
} from './Responsive';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    listenToOrientationChanges(this);
  }

  componentWillUnmount() {
    removeOrientationChanges();
  }

  render() {
    const ps = portraitStyles();
    const ls = landscapeStyles();
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={ps.container}>
          <View style={getDynamicStyles(ps.view, ls.view)}>
            <Text style={ps.text}>Hello, world</Text>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

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
      fontSize: widthToDp('4%'),
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

export default App;
