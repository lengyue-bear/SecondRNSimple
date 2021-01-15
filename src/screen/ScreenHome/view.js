/**
 * ScreenHome/index.js
 */

import React from 'react';
import { View, Text, Button } from 'react-native';

export default self => (
    <View>
        <Text style={{ fontSize: 36 }}>Home页</Text>
        <Button
            title="跳转测试页面"
            // 路由跳转
            onPress={() => self.navigation.navigate("ScreenTest")}
        />
    </View>
);
