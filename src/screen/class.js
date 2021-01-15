import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default class ClassScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          backgroundColor: "#f0f0f0",
        }}
      >
        <Text>Class</Text>
      </View>
    );
  }
}
