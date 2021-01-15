import React, { Component } from "react";
import { SafeAreaView,  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screen/home";
import AddScreen from "./src/screen/add";
import ReportScreen from "./src/screen/report";
import ClassScreen from "./src/screen/class";
import SettingScreen from "./src/screen/setting";
import TabsUI from "./src/component/tab";

import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const tabs = [
  { name: "Home" },
  { name: "Report" },
  { name: "Class" },
  { name: "Setting" },
  { name: "Add" },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }

  setHide(b) {
    this.setState({
      hide: b,
    });
  }

  render() {
    return (
        <NavigationContainer>
          <Tab.Navigator
            tabBarVisible={true}
            tabBar={(props) => {
              return <TabsUI {...{ tabs, ...props }} />;
            }}
          >
            <Tab.Screen name={tabs[0].name} component={HomeScreen} />
            <Tab.Screen name={tabs[1].name} component={ReportScreen} />
            <Tab.Screen name={tabs[2].name} component={ClassScreen} />
            <Tab.Screen name={tabs[3].name} component={SettingScreen} />
            <Tab.Screen
              name={tabs[4].name}
              component={AddScreen}
              isFocused={() => {}}
            />
          </Tab.Navigator>
        </NavigationContainer>
    );
  }
}
