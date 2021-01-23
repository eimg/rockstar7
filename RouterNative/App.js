import React, { useState, useEffect } from 'react';
import { Drawer, Container, Text, Header, Title, Left, Body, Right, List, ListItem, Separator, CheckBox, Item, Input, Button, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { TouchableOpacity } from 'react-native';
import { NativeRouter, Route } from "react-router-native";

import Nav from './Nav';
import Compose from './Compose';
import Inbox from './Inbox';
import Sent from './Sent';

const App = () => {
	let [ready, setReady] = useState(false);

	let drawer;

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
	}, [ready]);

	if(!ready) return <AppLoading />;

	const closeDrawer = () => {
		drawer._root.close()
	}; 

	const openDrawer = () => { 
		drawer._root.open() 
	};

	return (
		<NativeRouter>
			<Drawer 
				ref={(ref) => drawer = ref } 
				tapToClose={true}
				content={<Nav closeDrawer={closeDrawer} />}
				onClose={() => closeDrawer()}
			>
				<Container>
					<Header>
						<Left>
							<TouchableOpacity onPress={openDrawer}>
								<Ionicons name="menu-outline" size={32} color="white" />
							</TouchableOpacity>
						</Left>
						<Body>
							<Title>Native Drawer</Title>
						</Body>
					</Header>
					<Content>
						<Route exact path="/" component={Inbox} />
						<Route path="/compose" component={Compose} />
						<Route path="/Sent" component={Sent} />
					</Content>
				</Container>
			</Drawer>
		</NativeRouter>
	);
}

export default App;
