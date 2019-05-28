import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Seasons from '../../components/Seasons';
import {SafeAreaView} from 'react-navigation';

export default class Home extends React.Component{ 
constructor(props){
  super(props);

  this.getData = this.getData.bind(this);
}


static navigationOptions = () => {
  return{
    title: 'Home',
  };
}
  
  getData(season) {

    this.props.navigation.navigate('Temporada',{ 

      season: season,
      name: 'Emerson Rodrigues', 
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
