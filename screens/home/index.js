import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Seasons from '../../components/Seasons';
import Header from '../../components/Header';
import {SafeAreaView} from 'react-navigation';

export default class Home extends React.Component{ 
constructor(props){
  super(props);

  this.getData = this.getData.bind(this);
}


static navigationOptions = () => {
  return{
    headerTitle: <Header />,
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
      <SafeAreaView>
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
