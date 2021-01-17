import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
	container: {
		padding: 20
	}
}

const Compose = props => {
	return (
		<div style={styles.container}>
			<FormControl fullWidth>
				<TextField label="Subject" />
			</FormControl>
			<FormControl fullWidth>
				<TextField multiline rows={5} label="Body" />
			</FormControl>
			<br /><br />
			<Button variant="contained" color="primary">
				Send
			</Button>
		</div>
	);
};

export default Compose;