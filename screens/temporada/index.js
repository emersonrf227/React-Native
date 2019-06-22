import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Seasons from '../../components/Seasons';
import { SafeAreaView, ScrollView } from 'react-navigation';
import { Container, Header, Content, List, ListItem, Left, Right, Icon, Button } from 'native-base';
import Moment from 'moment';




export default class App extends React.Component {





    // (STATE) METODO QUE ARMAZENA OS DADOS DA API  
    state = {

        results: [],
        anoTemp: this.props.navigation.getParam('season')


    };






    // TITULO QUE SERA EXIBIDO NO CABECALHO
    static navigationOptions = () => {
        return {
            title: 'Temporada',
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
        fetch('http://ergast.com/api/f1/' + season + '.json')
            .then((response) => response.json())

            .then((data) => {
                //console.log(data.MRData.RaceTable.Races)

                this.setState({
                    results: data.MRData.RaceTable.Races

                });

            }).catch((err) => {
                console.log(err);

            });
    }



    renderResult(item) {
        Moment.locale('pt');
        let dateCor = item.date;
        let nameGp = item.raceName.replace("Grand Prix", "");
        let corridas = [
            <ListItem>
                <Left>
                    <Text>GP {nameGp}</Text>
                </Left>
                <Right>
                    <Text> {Moment(dateCor).format('DD/MM')} </Text>
                </Right>
            </ListItem>
        ]

        return corridas;

    }


    // (RENDER) METODO QUE CARREGA TODO O PROJETO 
    render() {
        return (


            <SafeAreaView>
                <Text style={styles.textAge} >Circuitos do ano de: {this.state.anoTemp} </Text>

                <Button   
                onPress={() => this.props.navigation.navigate('Pilotos',{ 
                    season: this.state.anoTemp,
                    })}> 
                
                <Text>
                 Acessar Pilotos

                </Text>
                </Button>

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


    }

});
