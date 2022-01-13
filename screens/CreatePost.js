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

export default class CreatePost extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Create Post</Text>
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
