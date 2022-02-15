
import * as React from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function OpenData({weatherdata}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"  align="center" className="heading">
            MINI AUTOMATED WEATHER STATION
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="">

            <ListItem>
              <Button href="/" variant="" className="text-dark">
                Home
              </Button>
            </ListItem>
            <ListItem>
              <Button href="/openweather" variant="" className="text-dark">
                Open Weather
              </Button>
            </ListItem>
            <ListItem>
              <Button href="/activity" variant="" className="text-dark">
                Activities
              </Button>
            </ListItem>
         
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
          
        <div className="container mt-0 card">
            <h2 className="containercard-header  text-center">{weatherdata.name} </h2>
            <div className='card-body'>
                <div className=" mt-0  card-header">
                  <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                  <p className="description">{weatherdata.weather[0].main}</p>
                </div>
                <div className='mt-1 card-group'>
                    <div className='card m-1'>
                        <h5 className='card-title btn btn-primary  d-flex justify-content-center '>Temperature</h5>
                        <h4 className='card-text text-center justify-content-center'>{weatherdata.main.temp} <code><sup>0</sup>C</code></h4>
                    </div>
                    <div className='card m-1'>
                        <h5 className='card-title btn btn-primary  d-flex justify-content-center'>Humidity</h5>
                        <h4 className='card-text text-center justify-content-center'>{weatherdata.main.humidity}<code>%</code></h4>
                    </div>
                </div>
                <di className=" mt-2 card-group">
                  <div className='card m-1'>
                          <h5 className='card-title btn btn-primary  d-flex justify-content-center'>Pressure</h5>
                          <h4 className='card-text text-center justify-content-center'>{weatherdata.main.pressure}<code>hPa</code></h4>
                      </div>
                      <div className='card m-1'>
                          <h5 className='card-title btn btn-primary  d-flex justify-content-center'>Wind</h5>
                          <h4 className='card-text text-center justify-content-center'>{weatherdata.wind.speed}<code>Km/hr</code></h4>
                    </div>
                </di>
            </div>
            
        </div>
      </Main>
    </Box>
  );
}
