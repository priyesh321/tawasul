import React, { Component } from "react";
import Login from './src/components/Login';
import SideMenu from './src/components/SideMenu';
import Events from './src/components/Events';
import Demo from './src/components/Demo';
import Groups from './src/components/Groups';
import EmployeeDirectory from './src/components/EmployeeDirectory';
import Occasions from './src/components/Occasions';

import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
const HomeDrawer = createDrawerNavigator({
    Drawer: {
        screen: Login,
        screenProps: {
            name: 'Login',
        }
    },
},
    {
        Name: 'Main',
        contentComponent: props => <SideMenu {...props} />,
        header: null,
        headerMode: 'none'
    }
);

const MainNavigator = createStackNavigator({
    Login: {
        screen: Login,
        screen: HomeDrawer
    },
    SideMenu: {
        screen: SideMenu,
    },
    Events: {
        screen: Events,
    },
    Demo: {
        screen: Demo,
    },
    Groups: {
        screen: Groups,
    },
    EmployeeDirectory: {
        screen: EmployeeDirectory
    },
    Occasions: {
        screen: Occasions
    }
},
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    });

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer
console.disableYellowBox = true;
