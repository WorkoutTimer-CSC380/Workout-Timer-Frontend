import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import FitnessCenterTwoToneIcon from '@material-ui/icons/FitnessCenterTwoTone';
import UpdateTwoToneIcon from '@material-ui/icons/UpdateTwoTone';
import Home from './components/desktop-components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MyWorkouts from './components/desktop-components/pages/MyWorkouts';
import RecentWorkouts from './components/desktop-components/pages/RecentWorkouts';
import TimerIcon from '@material-ui/icons/Timer';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary
    }
  }),
);

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Workout Timer
          </Typography>
          <IconButton color="inherit">   <TimerIcon></TimerIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Router>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeTwoToneIcon fontSize="large"></HomeTwoToneIcon>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/my-workouts" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <FitnessCenterTwoToneIcon fontSize="large"></FitnessCenterTwoToneIcon>
                </ListItemIcon>
                <ListItemText primary="My Workouts" />
              </ListItem>
            </Link>
            <Divider />
            <Link to="/recent-workouts" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <UpdateTwoToneIcon fontSize="large"></UpdateTwoToneIcon>
                </ListItemIcon>
                <ListItemText primary="Recent Workouts" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
          </List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/my-workouts" component={MyWorkouts} />
            <Route exact path="/recent-workouts" component={RecentWorkouts} />
          </Switch>
        </main>
      </Router>
    </div>

  );
}

