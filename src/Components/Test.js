/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Block, TextView, Button} from './MyComponents';
import LineargGradient from 'react-native-linear-gradient';
import AnimateNumber from 'react-native-countup';
import Charts from './Charts';
import axios from 'axios';

const W = Dimensions.get('window').width;
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }
  componentDidMount() {
    axios
      .get('https://corona.lmao.ninja/v3/covid-19/countries/vn')
      .then(responseJson => {
        console.warn('betest');
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      const cases = 100;
      const deaths = 100;
      const recovered = 100;
      return (
        <ScrollView style={styles.scrollView}>
          <Block block>
            <LineargGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              locations={[0, 0.3, 0.6]}
              style={styles.lineargGradient}
              colors={['#6C7FDF', '#C56AE0']}>
              <Image source={require('./images/map.png')} />
            </LineargGradient>
            <Image
              style={styles.img}
              source={require('./images/nhiemcovid.png')}
            />

            <Block>
              <Block
                height={600}
                color="rgba(250,250,250,0.99)"
                style={styles.boxCase}>
                <Block padding={20}>
                  <Block justifyContent="space-between" direction="row">
                    <Block>
                      <TextView h6>Viet Nam Case Update</TextView>
                      <TextView>Update Jully 1</TextView>
                    </Block>
                    <Button
                      textColor="blue"
                      onPress={() =>
                        this.props.navigator.navigate('Detalvitim')
                      }>
                      See details
                    </Button>
                  </Block>
                </Block>
                <View>
                  <Charts />
                </View>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 0,
  },
  lineargGradient: {
    position: 'absolute',
    height: 900,
  },
  img: {
    top: -40,
    left: -60,
    width: '100%',
    height: '65%',
  },
  stayhome: {
    flex: 1,
    top: 110,
    left: 155,
  },
  boxCase: {
    width: W,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    top: -119,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,

    elevation: 10,
  },
});
