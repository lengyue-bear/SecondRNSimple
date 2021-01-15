
import React from "react"

import ScreenHome from "../ScreenHome";
import ScreenTab1 from "../ScreenTab1";
import ScreenTab2 from "../ScreenTab2";
import ScreenTab3 from "../ScreenTab3";

import { createBottomTabNavigator } from 'react-navigation-tabs';

//注意：因为高版本问题，这里需要加手动加createAppContainer，不然爆（报）错
const ScreenBottomNav = createBottomTabNavigator({
    ScreenHome:{
        screen:ScreenHome
    },
    ScreenTab1:{
        screen:ScreenTab1
    },
    ScreenTab2:{
        screen:ScreenTab2
    },
    ScreenTab3:{
        screen:ScreenTab3
    },
}, {
    tabBarPosition: 'bottom',
},);

export default ScreenBottomNav;
