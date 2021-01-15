/**
 * route.js
 * 路由配置
 */
import React from "react"
import { createStackNavigator } from "react-navigation-stack";

import ScreenBottomNav from '../screen/ScreenBottomNav';
import ScreenHome from "../screen/ScreenHome";
import ScreenTest from "../screen/ScreenTest";
import ScreenTab1 from '../screen/ScreenTab1';
import ScreenTab2 from '../screen/ScreenTab2';
import ScreenTab3 from '../screen/ScreenTab3';
import {createAppContainer} from 'react-navigation';

//注意：因为高版本问题，这里需要加手动加createAppContainer，不然爆（报）错
const AppNavigator = createAppContainer(createStackNavigator({
    ScreenBottomNav: {
        screen: ScreenBottomNav,
    },
    ScreenHome:{
        screen:ScreenHome
    },
    ScreenTest:{
        screen:ScreenTest
    },
    ScreenTab1: {
        screen: ScreenTab1,
    },
    ScreenTab2: {
        screen: ScreenTab2,
    },
    ScreenTab3: {
        screen: ScreenTab3,
    },
}));

export default () => <AppNavigator />
