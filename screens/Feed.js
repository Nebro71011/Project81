import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';

export default class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Feed</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
