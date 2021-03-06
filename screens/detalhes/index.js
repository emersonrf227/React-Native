import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-navigation';
import { Container, Header, Content, List, ListItem, Left, Right, Icon, Button } from 'native-base';
import { Linking } from 'react-native';
import Wiki from '../../assets/wiki.png';

export default class Detalhes extends React.Component {

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }


  // (STATE) METODO QUE ARMAZENA OS DADOS DA API  
  state = {

    results: [],
    anoTemp: this.props.navigation.getParam('season')


  };


  // TITULO QUE SERA EXIBIDO NO CABECALHO
  static navigationOptions = () => {
    return {
      title: 'Detalhes',
    };
  }

  // CONTRUTOR DO METODO 
  componentDidMount() {
    const season = this.props.navigation.getParam('season');

    let yers = this.props.navigation.getParam('season');



    //ESSA PARTE ESTA ACIONANDO A API PASSANDO O PARAMENTO SEASON
    this.getData(season);





  }

  // (GETDATA) METODO QUE CHAMA A API

  getData(season) {
    fetch('http://ergast.com/api/f1/' + season + '/drivers.json')
      .then((response) => response.json())

      .then((data) => {
        //console.log(data.MRData.RaceTable.Races)

        this.setState({
          results: data.MRData.DriverTable.Drivers

        });

      }).catch((err) => {
        console.log(err);

      });
  }



  renderResult(item) {
    let primaryName = item.givenName;
    let familyName = item.familyName;
    let url = item.url.replace("en.", "pt.");
    let corridas = [
      <ListItem>
        <Left>
          <Text>{primaryName} {familyName} </Text>
        </Left>
        <Right>
          <Text onPress={() => Linking.openURL(url)}>
            <Image source={Wiki} style={styles.iconWiki} />
          </Text>
        </Right>
      </ListItem>
    ]

    return corridas;

  }


  // (RENDER) METODO QUE CARREGA TODO O PROJETO 
  render() {
    return (


      <SafeAreaView>
        <Text style={styles.textAge} >Pilotos do ano de: {this.state.anoTemp} </Text>
        <ScrollView>
          <List>
            {this.state.results.map(this.renderResult)}
          </List>
        </ScrollView>
      </SafeAreaView >
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
  contentContainer: {
    paddingVertical: 30
  },
  textAge: {
    margin: 20,
    fontSize: 19,


  },
  iconWiki: {

    width: 40,
    height: 40


  }

});
