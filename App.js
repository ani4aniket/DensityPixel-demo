import React, {Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  listenToOrientationChanges,
  removeOrientationChanges,
  widthToDp,
  getDynamicStyles,
} from './Responsive';

class App extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    listenToOrientationChanges(this);
  }

  componentWillUnmount() {
    this._isMounted = false;
    removeOrientationChanges();
  }

  render() {
    const ps = portraitStyles();
    const ls = landscapeStyles();
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={getDynamicStyles(ps.view, ls.view)}>
            <Text style={getDynamicStyles(ps.text, ls.text)}>Hello, world</Text>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const portraitStyles = () => {
  return StyleSheet.create({
    view: {
      backgroundColor: 'lightblue',
    },
    text: {
      fontSize: widthToDp('6%'),
    },
  });
};

const landscapeStyles = () => {
  return StyleSheet.create({
    view: {
      backgroundColor: 'red',
    },
    text: {
      fontSize: widthToDp('3%'),
    },
  });
};

export default App;
