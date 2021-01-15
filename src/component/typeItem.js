import React, { Component } from "react";
import { StyleSheet, Image, Text, View, Pressable } from "react-native";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, typeIndex, imgSource } = this.props;

    return (
      <Pressable
        style={{
          width: 55,
          height: 70,
          backgroundColor: typeIndex == item.id ? item.color : "#feFefe",
          borderRadius: 13,
          marginVertical: 6,
          marginHorizontal: 3,
          alignItems: "center",
          justifyContent: "center",

          shadowColor: "#000",

          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 2,

          elevation: 5,
        }}
        onPress={() => {
          this.props.SetType(item.id);
        }}
      >
        <View
          style={{
            width: 37,
            height: 37,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 2,
            backgroundColor: typeIndex == item.id ? "#fff" : item.color,
          }}
        >
          <Image
            style={styles.img}
            source={typeIndex == item.id ? imgSource.color : imgSource.default}
          />
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: typeIndex == item.id ? "#fff" : item.color,
          }}
        >
          {item.title}
        </Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  item: {},
  img: {
    width: "70%",
    resizeMode: "contain",
  },
});
