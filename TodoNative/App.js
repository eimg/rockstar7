import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
	appbar: {
		backgroundColor: '#58e',
		padding: 30
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: "white"
	},
	item: {
		padding: 25,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		flexDirection: 'row'
	},
	itemText: {
		fontSize: 25,
		flex: 1
	},
	input: { 
		borderColor: 'gray',
		backgroundColor: '#ffd',
		padding: 20,
		borderWidth: 1,
		borderColor: '#58e',
		fontSize: 30
	}
});

function App() {
	let [ items, setItem ] = useState([
		{ name: "Apple", price: 8.99 },
		{ name: "Orange", price: 8.99 },
		{ name: "Mango", price: 8.99 },
	]);

	const remove = name => () => {
		setItem(items.filter(item => item.name !== name));
	}

	return (
		<View style={styles.container}>
			<View style={styles.appbar}>
				<Text style={styles.title}>Native Toto</Text>
			</View>
			<View style={styles.list}>
				{items.map(item => {
					return (
						<View style={styles.item}>
							<Text style={styles.itemText}>{item.name}</Text>
							<Button title="Del" onPress={remove(item.name)} />
						</View>
					)
				})}
			</View>
			<View>
				<TextInput style={styles.input} />
			</View>
		</View>
	);
}

export default App;
