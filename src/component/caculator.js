import React, { Component } from "react";
import { StyleSheet, Alert, Image, Text, View, Pressable } from "react-native";

import icon_delete from "../../assets/caculator/delete.png";
import icon_add from "../../assets/caculator/add.png";
import icon_minus from "../../assets/caculator/minus.png";
import icon_check from "../../assets/caculator/check.png";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      costtext: "",
      caltext: "",
    };

    this._HandleNumber = this._HandleNumber.bind(this);
    this._HandleOperator = this._HandleOperator.bind(this);
    this._HandleDelete = this._HandleDelete.bind(this);
    this._SetCalText = this._SetCalText.bind(this);
    this._SetCostText = this._SetCostText.bind(this);
  }

  componentDidMount() {
    this.setState({
      costtext: "",
      caltext: "",
    });
  }

  _HandleOperator = (input) => {
    let caltext = this.state.caltext;
    let lastcha = caltext.slice(caltext.length - 1);

    if (caltext == "0") return;
    else if ((lastcha == "+" || lastcha == "-") && input == lastcha) return;
    else if ((lastcha == "+" || lastcha == "-") && input != lastcha) {
      caltext = caltext.slice(0, caltext.length - 1);
    }

    caltext += input;

    this._SetCalText(caltext);
  };

  _HandleDelete = () => {
    let caltext = this.state.caltext;

    if (caltext == "0") return; //初始

    //數字or+/-
    caltext = caltext.slice(0, caltext.length - 1);

    this._SetCalText(caltext);
    this._SetCostText(caltext);
  };

  _SetCalText = (text) => {
    let { SetCalText } = this.props;

    if (text == "") text = "0";

    this.setState({
      caltext: text,
    });

    SetCalText(text);
  };

  _SetCostText = (text) => {
    let { SetCostText } = this.props;
    let total = 0;

    if (text != "") {
      const operator = text.match(/[+-]/g);
      const num = text.split("+").join(",").split("-").join(",").split(",");
      total = parseInt(num[0]);
      for (let i = 1; i < num.length; i++) {
        if (num[i] != "") {
          num[i] = parseInt(num[i]);
          if (operator[i - 1] == "+") total += num[i];
          else if (operator[i - 1] == "-") total -= num[i];
        }
      }
      total += "";
    }

    this.setState({
      costtext: total,
    });

    SetCostText(total);
  };

  _HandleNumber = (input) => {
    let caltext = this.state.caltext;

    if (caltext == "0") {
      caltext = input;
    } else {
      caltext += input;
    }

    this._SetCalText(caltext);
    this._SetCostText(caltext);
  };

  render() {
    return (
      <View style={styles.calculator}>
        <View style={styles.list}>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleNumber("1")}
          >
            <Text style={styles.number_text}>1</Text>
          </Pressable>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleNumber("4")}
          >
            <Text style={styles.number_text}>4</Text>
          </Pressable>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleNumber("7")}
          >
            <Text style={styles.number_text}>7</Text>
          </Pressable>
        </View>
        <View style={styles.list}>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleNumber("2")}
          >
            <Text style={styles.number_text}>2</Text>
          </Pressable>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleNumber("5")}
          >
            <Text style={styles.number_text}>5</Text>
          </Pressable>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleNumber("8")}
          >
            <Text style={styles.number_text}>8</Text>
          </Pressable>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleNumber("0")}
          >
            <Text style={styles.number_text}>0</Text>
          </Pressable>
        </View>
        <View style={styles.list}>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleNumber("3")}
          >
            <Text style={styles.number_text}>3</Text>
          </Pressable>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleNumber("6")}
          >
            <Text style={styles.number_text}>6</Text>
          </Pressable>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleNumber("9")}
          >
            <Text style={styles.number_text}>9</Text>
          </Pressable>
        </View>

        <View style={styles.list}>
          <Pressable style={styles.number_btn} onPress={this._HandleDelete}>
            <Image style={styles.img} source={icon_delete} />
          </Pressable>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleOperator("+")}
          >
            <Image style={styles.img} source={icon_add} />
          </Pressable>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleOperator("-")}
          >
            <Image style={styles.img} source={icon_minus} />
          </Pressable>
          <Pressable
            style={styles.number_btn}
            onPress={() => this._HandleNumber(0)}
          >
            <Image style={styles.img} source={icon_check} />
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calculator: {
    backgroundColor: "#3C3C3C",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    padding: 8,
  },
  list: {
    width: "25%",
    height: "100%",
  },
  number_btn: {
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  number_text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  img: {
    width: "25%",
    resizeMode: "contain",
  },
});
