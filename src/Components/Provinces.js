/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Picker,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LineargGradient from 'react-native-linear-gradient';
import PickerSelect from 'react-native-picker-select';
import AnimateNumber from 'react-native-countup';
import {Block, TextView} from './MyComponents';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
export default class Province extends Component {
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

  _renderItem = ({item}) => (
    <Block height={200} color="rgba(250,250,250,0.9)" style={styles.boxCase}>
      <Block style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextView h3 color="#000">
          {item.city}
        </TextView>
      </Block>
      <Block direction="row" style={{marginTop: 15}}>
        <Block block>
          <Block middle>
            <Block
              width={35}
              height={35}
              middle
              centered
              borderRadius={35}
              color="#ED922020">
              <Image source={require('./images/Confirmed.png')} />
            </Block>
            <TextView
              style={{
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowOffset: {width: -1, height: 2},
                textShadowRadius: 5,
              }}
              padding={10}
              color="#ED9220"
              h2>
              <AnimateNumber
                value={item.cases}
                formatter={val => {
                  return parseFloat(val).toFixed(0);
                }}
              />
            </TextView>
            <TextView color="#40404040" h7 bold>
              Confirmed
            </TextView>
          </Block>
        </Block>

        <Block block>
          <Block middle>
            <Block
              width={35}
              height={35}
              middle
              centered
              borderRadius={35}
              color="#ff000020">
              <Image source={require('./images/death.png')} />
            </Block>
            <TextView
              style={{
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowOffset: {width: -1, height: 2},
                textShadowRadius: 5,
              }}
              padding={10}
              color="#ff0000"
              h2>
              <AnimateNumber
                value={item.deaths}
                formatter={val => {
                  return parseFloat(val).toFixed(0);
                }}
              />
            </TextView>
            <TextView color="#40404040" h7 bold>
              Death
            </TextView>
          </Block>
        </Block>

        <Block block>
          <Block middle>
            <Block
              width={35}
              height={35}
              middle
              centered
              borderRadius={35}
              color="#52A65820">
              <Image source={require('./images/recovered.png')} />
            </Block>
            <TextView
              style={{
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowOffset: {width: -1, height: 2},
                textShadowRadius: 5,
              }}
              padding={10}
              color="#52A658"
              h2>
              <AnimateNumber
                value={item.recovered}
                formatter={val => {
                  return parseFloat(val).toFixed(0);
                }}
              />
            </TextView>
            <TextView color="#40404040" h7 bold>
              Recovered
            </TextView>
          </Block>
        </Block>
      </Block>
    </Block>
  );

  render() {
    return (
      <Block block>
        <LineargGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0, 0.3, 0.6]}
          style={styles.lineargGradient}
          colors={['#6C7FDF', '#C56AE0']}>
          <Image source={require('./images/map.png')} />
        </LineargGradient>
        <FlatList
          data={this.state.province}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index}
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  lineargGradient: {
    position: 'absolute',
    height: 800,
  },
  boxCase: {
    left: 10,
    width: W - 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    top: 50,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
