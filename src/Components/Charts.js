/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {
  AreaChart,
  Grid,
  StackedAreaChart,
  YAxis,
  LineChart,
} from 'react-native-svg-charts';
import {Path} from 'react-native-svg';
import * as shape from 'd3-shape';
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const W = Dimensions.get('window').width;
export default class Api extends React.Component {
  state = {
    isLoading: true,
    timeline: [],
    cases: [],
    deaths: [],
    recovered: [],
  };
  async componentDidMount() {
    const url =
      'https://corona.lmao.ninja/v3/covid-19/historical/vn?lastdays=all';
    const response = await fetch(url);
    const responseJson = await response.json();
    this.setState({
      isLoading: false,
      cases: responseJson.timeline.cases,
      deaths: responseJson.timeline.deaths,
      recovered: responseJson.timeline.recovered,
    });
  }
  render() {
    const getCases = this.state.cases;
    const getDeaths = this.state.deaths;
    const getRecovered = this.state.recovered;
    console.log(Object.keys(getCases));
    const keyCases = Object.keys(getCases);
    const ValueCases = Object.values(getCases);
    const ValueDeath = Object.values(getDeaths);
    const ValueRecovered = Object.values(getRecovered);
    console.log(Object.values(getCases));

    const LineCases = ({line}) => (
      <Path
        key={'line'}
        d={line}
        stroke={'#ED9220'}
        strokeWidth={3}
        fill={'none'}
      />
    );
    const LineDeath = ({line}) => (
      <Path
        key={'line'}
        d={line}
        stroke={'#ff0000'}
        strokeWidth={3}
        fill={'none'}
      />
    );
    const LineRecovered = ({line}) => (
      <Path
        key={'line'}
        d={line}
        stroke={'#52A658'}
        strokeWidth={3}
        fill={'none'}
      />
    );
    return (
      <View style={{height: 200, width: W - 20, left: 10}}>
        <AreaChart
          style={{height: 200}}
          data={ValueCases}
          contentInset={{top: 30, bottom: 30}}
          curve={shape.curveNatural}
          svg={{ fill: '#ED922050'}}>
          <Grid />
          <LineCases />
        </AreaChart>
        <AreaChart
          style={StyleSheet.absoluteFill}
          data={ValueRecovered}
          contentInset={{top: 30, bottom: 30}}
          curve={shape.curveNatural}
          svg={{ fill: '#52A65870'}}>
          <LineRecovered />
        </AreaChart>
        <AreaChart
          style={StyleSheet.absoluteFill}
          data={ValueDeath}
          contentInset={{top: 30, bottom: 30}}
          curve={shape.curveNatural}
          svg={{fill: '#ff000050'}}>
          <LineDeath />
        </AreaChart>
      </View>
    );
  }
}
