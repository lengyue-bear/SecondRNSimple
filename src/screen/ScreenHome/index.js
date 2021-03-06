/**
 * ScreenHome/index.js
 */

import React, { Component } from 'react';
import view from './view';
import {Image} from 'react-native';

export default class ScreenHome extends Component {
    // 自定义当前页面路由配置，后面介绍的TabNavigator也使用这个对象中的属性
    static navigationOptions = {
        // 设置 title
        title: "首页",
        tabBarIcon: ({ focused }) => {
            const icon = focused
                ? require('../../assets/images/tab_home_active.png')
                : require('../../assets/images/tab_home.png');
            return <Image source={icon} style={{ height: 22, width: 22 }} />;
        },
    };

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
}
