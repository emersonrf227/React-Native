import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Seasons from '../../components/Seasons';
import { SafeAreaView } from 'react-navigation';
import { Container, Header, Content, List, ListItem, Left, Right, Icon } from 'native-base';




export default class App extends React.Component {


    // (STATE) METODO QUE ARMAZENA OS DADOS DA API  
    state = {

        results: [],


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

        console.log(item.raceName);

        let corridas = [


            <ListItem>
                <Left>
                    <Text key={'season'}>{item.raceName} </Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>











        ]
        return corridas;



    }

    // (RENDER) METODO QUE CARREGA TODO O PROJETO 
    render() {



        return (
            <SafeAreaView>

               
                    <List>

                        {this.state.results.map(this.renderResult)}

                    </List>

                    

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
        paddingVertical: 20
    }
});
