import React, { useState, useEffect } from 'react';
import { Container, Text, Header, Title, Left, Body, Right, List, ListItem, Separator, CheckBox, Item, Input, Button, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { TouchableOpacity } from 'react-native';

const api = "http://192.168.100.6:8000/tasks";

const App = () => {
	let [ready, setReady] = useState(false);
	let [tasks, setTasks] = useState([]);
	let [input, setInput] = useState('');

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
		fetch(api).then(res => res.json()).then(data => {
			setTasks(data);
		});
	}, [ready]);

	if(!ready) return <AppLoading />;

	const toggle = item => () => {
		const _id = item._id;
		const newStatus = +!item.status;
		fetch(`${api}/${_id}`, {
			method: 'put',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ status: newStatus })
		});

		setTasks(tasks.map(task => {
			if(_id === task._id) {
				task.status = newStatus;
			}

			return task;
		}));
	}

	const add = () => {
		fetch(api, {
			method: 'post',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ subject: input })
		}).then(res => res.json()).then(data => {
			setTasks([ ...tasks, data ]);
			setInput('');
		});
	}

	const remove = _id => () => {
		fetch(`${api}/${_id}`, { method: 'delete' });
		setTasks(tasks.filter(item => item._id !== _id));
	}

	const clear = () => {
		fetch(api, { method: 'delete' });
		setTasks(tasks.filter(item => item.status === 0));
	}

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
					<TouchableOpacity onPress={clear}>
						<Ionicons name="checkmark-done" size={20} color="white" />
					</TouchableOpacity>
				</Right>
			</Header>
			<Content>
				<List>
					<Separator bordered>
						<Text>TODO</Text>
					</Separator>

					{tasks.filter(item => item.status === 0).map(item => {
						return (
							<ListItem key={item._id}>
								<CheckBox checked={false} onPress={toggle(item)} />
								<Body><Text>{item.subject}</Text></Body>
								<TouchableOpacity onPress={remove(item._id)}>
									<Ionicons name="trash-outline" size={24} />
								</TouchableOpacity>
							</ListItem>
						)
					})}

					<Separator bordered>
						<Text>DONE</Text>
					</Separator>

					{tasks.filter(item => item.status === 1).map(item => {
						return (
							<ListItem key={item._id}>
								<CheckBox checked={true} onPress={toggle(item)} />
								<Body><Text>{item.subject}</Text></Body>
								<TouchableOpacity onPress={remove(item._id)}>
									<Ionicons name="trash-outline" size={24} />
								</TouchableOpacity>
							</ListItem>
						)
					})}

					<Separator bordered>
						<Text>NEW</Text>
					</Separator>
				</List>
				<Item>
					<Input
						placeholder="New Task" 
						value={input}
						onChangeText={ text => setInput(text) }
					/>
				</Item>
				<Button full success onPress={add}><Text>Add Task</Text></Button>
			</Content>
		</Container>
	);
}

export default App;
