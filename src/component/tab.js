import React from "react";
import { Alert, Pressable, Image, ImageBackground, View } from "react-native";

import nav_bg from "../../assets/navigation/tab.png";
import home_gray from "../../assets/navigation/home_gray.png";
import report_gray from "../../assets/navigation/report_gray.png";
import class_gray from "../../assets/navigation/class_gray.png";
import setting_gray from "../../assets/navigation/setting_gray.png";
import plus from "../../assets/navigation/plus.png";

export default function TabUI({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  
  return (
    <ImageBackground
      source={nav_bg}
      style={{
        width: "100%",
        height: 80,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        backgroundColor: "#fcfcfc",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "40%",
          height: "90%",
        }}
      >
        <Pressable
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={home_gray}
            style={{
              width: "40%",
              resizeMode: "contain",
            }}
          />
        </Pressable>
        <Pressable
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Report");
          }}
        >
          <Image
            source={report_gray}
            style={{
              width: "40%",
              resizeMode: "contain",
            }}
          />
        </Pressable>
      </View>

      <View
        style={{
          alignSelf: "flex-start",
          marginTop: -17.5,
        }}
      >
        <Pressable
          style={{
            width: 55,
            height: 55,
            borderRadius: 50,
            backgroundColor: "#9D9BFF",
            alignItems: "center",
            justifyContent: "center",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
          }}
          onPress={() => {
            navigation.navigate("Add");
          }}
        >
          <Image
            source={plus}
            style={{
              width: "50%",
              resizeMode: "contain",
            }}
          />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "40%",
          height: "90%",
        }}
      >
        <Pressable
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Class");
          }}
        >
          <Image
            source={class_gray}
            style={{
              width: "40%",
              resizeMode: "contain",
            }}
          />
        </Pressable>
        <Pressable
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <Image
            source={setting_gray}
            style={{
              width: "40%",
              resizeMode: "contain",
            }}
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
}
