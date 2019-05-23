import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Seasons from './components/Seasons';
import {SafeAreaView} from 'react-navigation';



export default class App extends React.Component {
  getData(season) {
    fetch('http://ergast.com/api/f1/' + season + '.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Seasons
          nomeFuncao={this.getData}
        ></Seasons>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
