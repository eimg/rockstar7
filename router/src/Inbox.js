import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Inbox = props => {
	let [tab, setTab] = useState(0);

	return (
		<div>
			<Tabs value={tab}>
				<Tab label="Primary" onClick={() => setTab(0)} />
				<Tab label="Important" onClick={() => setTab(1)} />
				<Tab label="Promotion" onClick={() => setTab(2)} />
			</Tabs>

			<List>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<WorkIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Work" secondary="Jan 7, 2014" />
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<BeachAccessIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Vacation" secondary="July 20, 2014" />
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Family Photos" secondary="July 20, 2014" />
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<LocationOnIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Going There" secondary="July 20, 2014" />
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<FavoriteIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Favorite Time" secondary="July 20, 2014" />
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<RestoreIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="History Matter" secondary="July 20, 2014" />
				</ListItem>
			</List>
		</div>
	);
};

export default Inbox;