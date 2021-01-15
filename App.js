/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {
  Component,
} from 'react';
import Main from './src/config/route';
import { StyleSheet, View, Text } from 'react-native';

class App extends Component {
  constructor(pros){
    super(pros);
  }

  render(){
    // 渲染页面
    return <Main />;
    // return (
    //     <View style={styles.container}>
    //       <Text>哈哈哈</Text>
    //       <Text>2021哈哈哈</Text>
    //     </View>
    // );
  }

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 120,
    height: 120,
  },
});


export default App;
