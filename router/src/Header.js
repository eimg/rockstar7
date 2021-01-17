import React from 'react';

import { 
    Link,
    useParams,
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
    let { label } = useParams();

    return (
        <div style={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    {
                        props.back
                        ? <IconButton 
                            edge="start" 
                            style={styles.menuButton} 
                            color="inherit"
                        >
                            <Link to="/" style={{color: 'white', display: 'inherit'}}>
                                <ArrowBackIcon />
                            </Link>
                        </IconButton>
                        : <IconButton 
                            edge="start" 
                            style={styles.menuButton} 
                            color="inherit"
                            onClick={props.toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    }

                    <Typography variant="h6" style={styles.title}>
                        {
                            label
                            ? `${props.title}: ${label}`
                            : props.title
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
