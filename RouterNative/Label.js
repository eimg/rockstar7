import React from 'react';
import { Container, Text, Body } from 'native-base';

const Label = props => {
	return (
		<Container>
			<Body>
				<Text>
					Label:
					{ props.match.params.label }
				</Text>
			</Body>
		</Container>
	);
}

export default Label;
