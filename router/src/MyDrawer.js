import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
	list: {
		width: 250,
	}
};

const MyDrawer = props => {
	return (
		<Drawer open={props.open} onClose={props.toggleDrawer(false)}>
			<div
				style={styles.list}
				onClick={props.toggleDrawer(false)}
				onKeyDown={props.toggleDrawer(false)}
			>
				<List>
					<ListItem button>
						<ListItemIcon><InboxIcon /></ListItemIcon>
						<ListItemText primary="Inbox" />
					</ListItem>
					<ListItem button>
						<ListItemIcon><MailIcon /></ListItemIcon>
						<ListItemText primary="Sent" />
					</ListItem>
					<ListItem button>
						<ListItemIcon><InboxIcon /></ListItemIcon>
						<ListItemText primary="Draft" />
					</ListItem>
				</List>
			</div>
		</Drawer>
	);
}

export default MyDrawer;
