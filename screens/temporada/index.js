import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-navigation';
import { Container, Header, Content, List, ListItem, Left, Right, Icon, Button } from 'native-base';
import Moment from 'moment';
import { StackNavigator } from 'react-navigation';





export default class Temporadas extends React.Component {

    constructor(props) {
        super(props);

    }






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
        //ESSA PARTE ESTA ACIONANDO A API PASSANDO O PARAMENTO SEASON
        this.getData(season);
        this.getData(navigate);
        const navigate = props.navigation;

    }

    // (GETDATA) METODO QUE CHAMA A API

    getData(season) {
        fetch('http://ergast.com/api/f1/' + season + '/results/1.json')

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



    renderResult(item, method) {

        Moment.locale('pt');
        let dateCor = item.date;
        let nameGp = item.raceName.replace("Grand Prix", "");
        let corridas = [
            <ListItem>
                <Left>
                    <Text>GP {nameGp} {'\n'}

                        <Text style={styles.textDesc}> {'\n'}

                            {item.Circuit.Location.locality} - {item.Circuit.Location.country}
                            {'\n'}
                            {Moment(dateCor).format('DD/MM/YYYY')}

                        </Text>



                    </Text>



                </Left>
                <Right>

                    {/* PROFESSOR POR ALGUM MOTIVO NÃO CONSIGO FAZER ESSE CARA FUNCIONAR JA TENTEI DE VARIAS FORMAS E NÃO ACHO O ERRO.
                    SE CONSEGUIR ME INSTRUIR ONDE ERRE NA CORREÇÃO AGRADEÇO */}

                    {/* <Button transparent info
                        onPress={() => this.props.navigation('Detalhes')}  >
                        <Text style={styles.textLink} >Detalhes</Text>
                    </Button> */}

                    <Button transparent info
                        onPress={() => this.console.log('Detalhes')}  >
                        <Text style={styles.textLink} >Detalhes</Text>
                    </Button>



                </Right>

            </ListItem>


        ]

        return corridas;

    }


    // (RENDER) METODO QUE CARREGA TODO O PROJETO 
    render() {
        const { navigate } = this.props.navigation;
        return (


            <SafeAreaView>
                <Text style={styles.textAge} >Circuitos do ano de: {this.state.anoTemp} </Text>







                <Button style={styles.textLink} bordered
                    onPress={() => navigate('Pilotos', {
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

    },

    textLink: {
        color: '#4040ff',

    },

    textDesc: {
        color: '#909090',

    }

});
