import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default class Picker extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      province: [],
    };
  }
  componentDidMount() {
    fetch('https://corona.lmao.ninja/v3/covid-19/gov/vn')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          province: responseJson,
        });
      });
  }
  render() {
    return (
      <DropDownPicker
        defaultValue={this.state.province.city}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
      />
    );
  }
}

const styles = StyleSheet.create({});
