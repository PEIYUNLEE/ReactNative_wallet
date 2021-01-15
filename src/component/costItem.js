import React, { Component } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import icon_bus from "../../assets/type/bus.png";
import icon_food from "../../assets/type/food.png";
import icon_house from "../../assets/type/house.png";
import icon_money from "../../assets/type/money.png";
import icon_book from "../../assets/type/book.png";

export default class Item extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.imgview}>
          <Image style={styles.img} source={icon_bus} />
        </View>
        <Text style={styles.infotext}>現金</Text>
        <Text style={styles.typetext}>現金</Text>
        <Text style={styles.costtext}>- $ 3000</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: "97%",
    height: 55,
    marginBottom: 10,
    paddingHorizontal: 12,
    backgroundColor: "#feFefe",
    borderRadius: 13,

    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 5,
  },
  imgview: {
    width: 37,
    height: 37,
    backgroundColor: "#5A9CFF",
    borderRadius: 50,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "70%",
    resizeMode: "contain",
  },
  infotext: {
    width: 110,
    fontSize: 14,
    fontWeight: "bold",
    color: "#5A9CFF",
  },
  typetext: {
    width: 50,
    fontSize: 14,
    fontWeight: "bold",
    color: "#BCBCBC",
  },
  costtext: {
    width: 70,
    fontSize: 14,
    fontWeight: "bold",
    color: "#5A9CFF",
    textAlign: "right",
  },
});
