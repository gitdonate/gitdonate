import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import Search from './Search';
import withRoot from '../../withRoot';
/*
This is the layout component. It's displayed by the top-level Route
this.props.children will correspond to the current URL's component.

If the URL is only / then the IndexRoute's component will be the child (Search component)
If the URL is /user/:username then the User component will be displayed.
*/
const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
    },
    search: {
      position: 'relative',
      //borderRadius: theme.shape.borderRadius,
      //backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
      //  backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      //marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      /*
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
      },
      */
    },
    searchIcon: {
      //width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
class App extends React.Component {
    constructor() {
       super();
       this.state={};
       //this.classes = props;
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={styles("").root}>
            {/*<div className="main-app">*/}
                <AppBar className="main-header" position="static" className={styles("").appbar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            GitDonate - Client
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main className="main-content">
                    {this.props.children}
                </main>
            </div>
        );
    }
};

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default App;
export default withRoot(withStyles(styles)(App));