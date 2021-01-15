import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Pressable,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";

import Item from "../component/typeItem";
import Calculator from "../component/caculator";

import icon_bus from "../../assets/type/bus.png";
import icon_food from "../../assets/type/food.png";
import icon_house from "../../assets/type/house.png";
import icon_money from "../../assets/type/money.png";
import icon_book from "../../assets/type/book.png";
import icon_shopping from "../../assets/type/shopping.png";
import icon_play from "../../assets/type/play.png";
import icon_other from "../../assets/type/other.png";
import icon_bus_color from "../../assets/type/bus_color.png";
import icon_food_color from "../../assets/type/food_color.png";
import icon_house_color from "../../assets/type/house_color.png";
import icon_money_color from "../../assets/type/money_color.png";
import icon_book_color from "../../assets/type/book_color.png";
import icon_shopping_color from "../../assets/type/shopping_color.png";
import icon_play_color from "../../assets/type/play_color.png";
import icon_other_color from "../../assets/type/other_color.png";

export default class AddsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletData: [
        {
          id: "0",
          title: "現金",
          color: "#807EFF",
        },
        {
          id: "1",
          title: "信用卡",
          color: "red",
        },
      ],
      incomeTypeData: [
        {
          id: "0",
          title: "收入",
          imgIndex: 0,
          color: "#F9C74F",
        },
      ],
      costTypeData: [
        {
          id: "1",
          title: "食物",
          imgIndex: 1,
          color: "#FF5A5A",
        },
        {
          id: "2",
          title: "交通",
          imgIndex: 2,
          color: "#5A9CFF",
        },
        {
          id: "3",
          title: "居家",
          imgIndex: 3,
          color: "#90BE6D",
        },
        {
          id: "4",
          title: "消費",
          imgIndex: 4,
          color: "#B36DBE",
        },
        {
          id: "5",
          title: "娛樂",
          imgIndex: 5,
          color: "#F9844A",
        },
        {
          id: "6",
          title: "教育",
          imgIndex: 6,
          color: "#987A56",
        },
        {
          id: "7",
          title: "其他",
          imgIndex: 7,
          color: "#898989",
        },
      ],
      imgSource: [
        { default: icon_money, color: icon_money_color },
        { default: icon_food, color: icon_food_color },
        { default: icon_bus, color: icon_bus_color },
        { default: icon_house, color: icon_house_color },
        { default: icon_shopping, color: icon_shopping_color },
        { default: icon_play, color: icon_play_color },
        { default: icon_book, color: icon_book_color },
        { default: icon_other, color: icon_other_color },
      ],
      costtext: 0,
      caltext: "0",
      memo: "輸入備註",
      typeIndex: 1,
      wallet: 0,
    };

    this.SetCostText = this.SetCostText.bind(this);
    this.SetCalText = this.SetCalText.bind(this);
    this.SetType = this.SetType.bind(this);
    this._changeMemoText = this._changeMemoText.bind(this);
    this._changeWallet = this._changeWallet.bind(this);
  }

  // ({ navigation, route,props })
  // const [value, onChangeText] = React.useState(route.name);
  // Alert.alert(route.name)

  componentDidMount() {
    this.props.navigation.setOptions({
      tabBarVisible: false,
    });
    this.setState({
      costtext: 0,
      caltext: "0",
      memo: "輸入備註",
    });
  }

  SetCostText = (text) => {
    if (text == "")
      this.setState({
        costtext: "0",
      });
    else
      this.setState({
        costtext: text,
      });
  };

  SetCalText = (text) => {
    if (text == "")
      this.setState({
        caltext: "0",
      });
    else
      this.setState({
        caltext: text,
      });
  };

  SetType = (index) => {
    this.setState({
      typeIndex: index,
    });
  };

  _changeMemoText = (text) => {
    this.setState({
      memo: text,
    });
  };

  _changeWallet = () => {
    let id = this.state.wallet;
    id++;

    if (id >= this.state.walletData.length) id = 0;

    this.setState({
      wallet: id,
    });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.add}>
          <View style={styles.top}>
            <Text style={styles.toptext}>今天</Text>
            <View style={styles.cost_view}>
              <Pressable
                style={{
                  backgroundColor: this.state.walletData[this.state.wallet].color,
                  borderRadius: 10,
                  height: 45,
                  paddingHorizontal: 15,
                  alignItems: "center",
                  justifyContent: "center",

                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 2,

                  elevation: 3,
                }}
                onPress={this._changeWallet}
              >
                <Text style={styles.cost_btn_text}>
                  {this.state.walletData[this.state.wallet].title}
                </Text>
              </Pressable>
              <View>
                <Text style={styles.cost_text_cal}>{this.state.caltext}</Text>
                <Text style={styles.cost_text}>$ {this.state.costtext}</Text>
              </View>
            </View>
            <View style={styles.memo_view}>
              <Text style={styles.title}>備註</Text>
              <TextInput
                onSubmitEditing={Keyboard.dismiss}
                style={{
                  fontSize: 16,
                  flexDirection: "row",
                  marginHorizontal: 10,
                  paddingHorizontal: 5,
                  height: 35,
                  borderColor: "#C9C9C9",
                  color: this.state.memo == "輸入備註" ? "#C9C9C9" : "#3C3C3C",
                  fontWeight: "bold",
                  borderBottomWidth: 1,
                  width: "75%",
                }}
                onChangeText={(text) => this._changeMemoText(text)}
                onBlur={() => {
                  if (this.state.memo == "") this._changeMemoText("輸入備註");
                }}
                onFocus={() => {
                  if (this.state.memo == "輸入備註") this._changeMemoText("");
                }}
                value={this.state.memo}
              />
            </View>
            <View>
              <Text style={styles.title}>分類</Text>
              <Text style={styles.class_text}>支出</Text>
              <View style={styles.class_listview}>
                <FlatList
                  horizontal={true}
                  style={styles.typelist}
                  data={this.state.costTypeData}
                  renderItem={({ item }) => (
                    <Item
                      item={item}
                      SetType={this.SetType}
                      typeIndex={this.state.typeIndex}
                      imgSource={this.state.imgSource[item.imgIndex]}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <Text style={styles.class_text}>收入</Text>
              <View style={styles.class_listview}>
                <FlatList
                  horizontal={true}
                  style={styles.typelist}
                  data={this.state.incomeTypeData}
                  renderItem={({ item }) => (
                    <Item
                      item={item}
                      SetType={this.SetType}
                      typeIndex={this.state.typeIndex}
                      imgSource={this.state.imgSource[item.imgIndex]}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <Calculator
              SetCostText={this.SetCostText}
              SetCalText={this.SetCalText}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  add: {
    flex: 1,
    paddingTop: 40,
    borderBottomColor: "red",
    backgroundColor: "#fcfcfc",
  },
  top: {
    flex: 0.72,
    minHeight: 430,
  },
  bottom: {
    flex: 0.28,
    minHeight: 210,
  },
  toptext: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: "bold",
    color: "#3C3C3C",
  },
  cost_view: {
    height: 70,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 13,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 2,
  },
  cost_btn_text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "right",
  },
  cost_text_cal: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#C9C9C9",
    textAlign: "right",
  },
  cost_text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3c3c3c",
    textAlign: "right",
  },
  memo_view: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  title: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#C9C9C9",
  },
  class_listview: {
    marginLeft: 15,
  },
  class_text: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#3c3c3c",
    marginTop: 5,
    marginBottom: 3,
  },
});
