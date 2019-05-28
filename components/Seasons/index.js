import React, { PureComponent } from 'react';
import { View} from 'react-native';
import { Button, Text} from 'native-base';
import style from './style';





class Seasons extends PureComponent {
    renderSeasons() {
        let items = [];

        for (let i = 0; i <= 19; i++) {
            const year = '20' + (i > 9 ? i: `0${i}`);
            items.push(
                <Button   style={style.buttons}
                onPress={() =>this.props.nomeFuncao(year)}
                
                key={`season${i}`}>
                <Text>
                    {i > 9 ? `20${i}` : `200${i}`}

                </Text>
                </Button>
               
            );
        }
        return items;
    }
    render() {
        return (
            <View style={style.container}>
                {this.renderSeasons()}
            </View>
        );
    }

}

export default Seasons;

