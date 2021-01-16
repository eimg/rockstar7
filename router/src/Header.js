import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 20,
    },
    title: {
        flexGrow: 1,
    },
};

const Header = props => {
    return (
        <div style={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        style={styles.menuButton} 
                        color="inherit"
                        onClick={props.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={styles.title}>
                        Fairway Mail
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
