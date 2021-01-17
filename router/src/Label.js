import React from 'react';

import { useParams } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

const Label = props => {
	let { label } = useParams();
	let data = [];

	switch(label) {
		case 'social':
			data = [
				{ id: 1, subject: "Birthday party", time: "2021 Jan 23" },
				{ id: 2, subject: "Vacation with friends", time: "2021 Jan 23" },
				{ id: 3, subject: "Bowling night", time: "2021 Jan 30" },
			];
			break;
		case 'hobby':
			data = [
				{ id: 1, subject: "Bowling night", time: "2021 Jan 30" },
			];
		case 'work':
			data = [
				{ id: 1, subject: "Meeting with HR", time: "2021 Jan 23" },
				{ id: 2, subject: "Staff party", time: "2021 Jan 23" },
			];
			break;
	}

	return (
		<div>
			<List>
				{data.map(item => {
					return (
						<ListItem key={item.id}>
							<ListItemAvatar>
								<Avatar>
									<WorkIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText 
								primary={item.subject}
								secondary={item.time} />
						</ListItem>
					)
				})}
			</List>
		</div>
	);
};

export default Label;