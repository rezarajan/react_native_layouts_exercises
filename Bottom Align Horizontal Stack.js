import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class BottomAlignHorizontalStack extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
        <View style={{width: 116, height: 116, backgroundColor: '#116E3C2'}} />
        <View style={{width: 116, height: 116, backgroundColor: '#4A90E2'}} />
        <View style={{width: 116, height: 116, backgroundColor: '#9013FE'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('LayoutExercise', () => BottomAlignHorizontalStack);