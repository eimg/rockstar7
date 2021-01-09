import React, { useState, useEffect } from 'react';
import { Container, Text, Header, Title, Left, Body, Right, Tabs, Tab, List, ListItem } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

const App = () => {
	let [ready, setReady] = useState(false);

	async function loadFonts() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font,
		});
		setReady(true);
	}

	useEffect(() => {
		loadFonts();
	});

	if(!ready) return <AppLoading />;

	return (
		<Container>
			<Header>
				<Left>
					<Ionicons name="list-circle" size={32} color="white" />
				</Left>
				<Body>
					<Title>Todo Native</Title>
				</Body>
				<Right>
					<Ionicons name="ios-ellipsis-vertical" size={20} color="white" />
				</Right>
			</Header>
			<Tabs>
				<Tab heading="Tab1">
					<List>
						<ListItem><Text>Item One</Text></ListItem>
						<ListItem><Text>Item Two</Text></ListItem>
						<ListItem><Text>Item Three</Text></ListItem>
						<ListItem><Text>Item Four</Text></ListItem>
						<ListItem><Text>Item Five</Text></ListItem>
					</List>
				</Tab>
				<Tab heading="Tab2">
					<Text>Tab 2</Text>
				</Tab>
				<Tab heading="Tab3">
					<Text>Tab 3</Text>
				</Tab>
			</Tabs>
		</Container>
	);
}

export default App;
