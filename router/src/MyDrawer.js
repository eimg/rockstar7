import React from 'react';

import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import SendIcon from '@material-ui/icons/Send';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LabelIcon from '@material-ui/icons/LabelOutlined';

const styles = {
	brand: {
		height: 150,
		background: '#aaa'
	},
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
				<div style={styles.brand}>

				</div>
				<List>
					<ListItem button>
						<ListItemIcon><SendIcon /></ListItemIcon>
						<Link to="/compose">
							<ListItemText primary="Compose" />
						</Link>
					</ListItem>
					<Divider />
					<ListItem button>
						<ListItemIcon><MailIcon /></ListItemIcon>
						<Link to="/">
							<ListItemText primary="Inbox" />
						</Link>
					</ListItem>
					<ListItem button>
						<ListItemIcon><InboxIcon /></ListItemIcon>
						<Link to="/draft">
							<ListItemText primary="Draft" />
						</Link>
					</ListItem>
				</List>
				<List subheader={<ListSubheader>Labels</ListSubheader>}>
					<ListItem button>
						<ListItemIcon><LabelIcon /></ListItemIcon>
						<Link to="/label/social">
							<ListItemText primary="Social" />
						</Link>
					</ListItem>
					<ListItem button>
						<ListItemIcon><LabelIcon /></ListItemIcon>
						<Link to="/label/hobby">
							<ListItemText primary="Hobby" />
						</Link>
					</ListItem>
					<ListItem button>
						<ListItemIcon><LabelIcon /></ListItemIcon>
						<Link to="/label/work">
							<ListItemText primary="Work" />
						</Link>
					</ListItem>
				</List>
			</div>
		</Drawer>
	);
}

export default MyDrawer;
