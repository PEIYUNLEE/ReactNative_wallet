import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView, View } from "react-native";

import Item from "../component/costItem";

export default class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[
        {
          id: "1",
          title: "First Item",
        },
        {
          id: "2",
          title: "Second Item",
        },
        {
          id: "3",
          title: "Third Item",
        },
        {
          id: "4",
          title: "Third Item",
        },
        {
          id: "5",
          title: "Third Item",
        },
        {
          id: "6",
          title: "Third Item",
        },
        {
          id: "7",
          title: "aird Item",
        },
        {
          id: "8",
          title: "Third Item",
        },
        {
          id: "9",
          title: "Third Item",
        },
        {
          id: "10",
          title: "Third Item",
        },
      ]
    }
  }

  _renderItem = ({ item }) => <Item />;

  render(){
    return (
      <SafeAreaView style={styles.home}>
        <View>
          <Text style={styles.toptext}>2021 / 05</Text>
        </View>
        <View style={styles.walletview}>
          <Text style={styles.toptext}>$1000</Text>
        </View>
        <View>
          <Text style={styles.day}>今天</Text>
          <SafeAreaView>
            <FlatList
              style={styles.list}
              contentContainerStyle={styles.listcontent}
              data={this.state.data}
              renderItem={this._renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </SafeAreaView>
        </View>
      </SafeAreaView>
    );

  }
}

const styles = StyleSheet.create({
  bgctest: {
    backgroundColor: "red",
  },
  home: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: "#fcfcfc",
  },
  toptext: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3C3C3C",
  },
  walletview: {
    backgroundColor: "red",
    height: 150,
    marginVertical:10,
  },
  day: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3C3C3C",
    textAlign: "center",
    marginBottom:10,
  },
  list: {
    width: "100%",
    marginBottom: "75%",
  },
  listcontent: {
    paddingTop: 5,
  },
});
