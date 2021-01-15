/**
 * route.js
 * 路由配置
 */
import React from "react"
import { createStackNavigator } from "react-navigation-stack";

import ScreenHome from "../screen/ScreenHome";
import ScreenTest from "../screen/ScreenTest";
import {createAppContainer} from 'react-navigation';

//注意：因为高版本问题，这里需要加手动加createAppContainer，不然爆（报）错
const AppNavigator = createAppContainer(createStackNavigator({
    ScreenHome:{
        screen:ScreenHome
    },
    ScreenTest:{
        screen:ScreenTest
    },
}));

export default () => <AppNavigator />
