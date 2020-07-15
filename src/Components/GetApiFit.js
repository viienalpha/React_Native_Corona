import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class GetApiFit {
  mapview;
  constructor() {
    return fetch('https://maps.vnpost.vn/apps/covid19/api/patientapi/list')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          this.mapview.fitToElements(true),
        });
      });
  }
}

const styles = StyleSheet.create({});
