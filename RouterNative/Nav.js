import React from 'react';
import { Container, Text, Left, Body, List, ListItem, Separator, Icon } from 'native-base';

import { Link } from "react-router-native";

const Nav = props => {
	return (
		<Container>
			<List>
				<Separator bordered></Separator>
				<ListItem itemHeader>
					<Text>MAIL</Text>
				</ListItem>
				<ListItem icon>
					<Left>
						<Icon name="send" />
					</Left>
					<Body>
						<Link to="/compose" underlayColor="#f0f4f7" 
							onPress={() => props.closeDrawer()}>
							<Text>Compose</Text>
						</Link>
					</Body>
				</ListItem>
				<ListItem icon>
					<Left>
						<Icon name="mail" />
					</Left>
					<Body>
						<Link to="/" underlayColor="#f0f4f7"
							onPress={() => props.closeDrawer()}>
							<Text>Inbox</Text>
						</Link>
					</Body>
				</ListItem>
				<ListItem icon last>
					<Left>
						<Icon name="mail-open" />
					</Left>
					<Body>
						<Link to="/sent" underlayColor="#f0f4f7"
							onPress={() => props.closeDrawer()}>
							<Text>Sent</Text>
						</Link>
					</Body>
				</ListItem>
			</List>
			<List>
				<Separator bordered></Separator>
				<ListItem itemHeader>
					<Text>LABELS</Text>
				</ListItem>
				<ListItem icon>
					<Left>
						<Icon name="bookmark" />
					</Left>
					<Body>
						<Link to="/label/social" underlayColor="#f0f4f7" 
							onPress={() => props.closeDrawer()}>
							<Text>Social</Text>
						</Link>
					</Body>
				</ListItem>
				<ListItem icon>
					<Left>
						<Icon name="bookmark" />
					</Left>
					<Body>
						<Link to="/label/work" underlayColor="#f0f4f7" 
							onPress={() => props.closeDrawer()}>
							<Text>Work</Text>
						</Link>
					</Body>
				</ListItem>
				<ListItem icon>
					<Left>
						<Icon name="bookmark" />
					</Left>
					<Body>
						<Link to="/label/family" underlayColor="#f0f4f7" 
							onPress={() => props.closeDrawer()}>
							<Text>Family</Text>
						</Link>
					</Body>
				</ListItem>
			</List>
		</Container>
	);
}

export default Nav;
