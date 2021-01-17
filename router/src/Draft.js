import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import ImageIcon from '@material-ui/icons/Image';

const Draft = props => {
	return (
		<div>
			<List>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Family Photos" secondary="July 20, 2014" />
				</ListItem>
			</List>
		</div>
	);
};

export default Draft;