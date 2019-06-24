import React, { PureComponent } from 'react';
import { Button, Text } from 'native-base';

class Detalhes extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Button transparent onPress={() =>  this.props.method(`${this.props.season}`, `${this.props.race}`)}>
				<Text>Detalhes</Text>
			</Button>
		);
	}
}

export default Detalhes;