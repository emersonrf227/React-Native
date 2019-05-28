import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Seasons from '../../components/Seasons';
import { SafeAreaView } from 'react-navigation';
import { Container, Header, Content, Card, CardItem, Body} from 'native-base';



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
       
            let corridas =[
                
            
            
            <Text key={'season'}>{item.raceName} {item.date} </Text>
        
        
        
        
        
        
        
        
        
        
        ]
              return  corridas;

       
            
    }

    // (RENDER) METODO QUE CARREGA TODO O PROJETO 
    render() {
     


        return (
            <SafeAreaView style={styles.container}>

                {this.state.results.map(this.renderResult)}

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
