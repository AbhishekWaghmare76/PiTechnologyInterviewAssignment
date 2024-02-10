import * as React from 'react';
import { styled as muiStyled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { mainListItemsArray } from './listItems';
import { Avatar, Badge, Input, InputAdornment, Menu, MenuItem, Select, Tooltip, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AppsIcon from '@mui/icons-material/Apps';
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import styled from 'styled-components';

const drawerWidth: number = 250;

const AddButtonDiv = styled('div')({
    padding: "0rem 1.5rem",
    width: "4.5rem",
    height: "4.5rem",
    backgroundColor: "#00704B",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "16px",
    color: "#68DA6A"
})

const LeftSideBarItems = styled('div')({
    margin: "0 auto"
})

const LeftSideBarItem = styled('div')({
    padding: "1rem 1.5rem"
})

const MenuItemDiv = styled.div`
    && {
        display: flex;
        align-items: center;
        gap: 2.5rem;
        padding: 0rem 0rem;
    }
    .icon-class {
        color: "#68DA6A";
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        border-radius: 10px;
        background-color: ${(props: any) => (props.selected ? "#00504B" : "#052E2B")};
    }
`

const Drawer = muiStyled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            backgroundColor: "#052E2B",
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: "90px",
            }),
        },
    }),
);

const NavBar = styled(Box)`
    && {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .navbar-right {
        display: flex;
        gap: 1rem;
    }
    .search-icon-div {
        border: 1px solid black;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 50%;
        padding: 5px;

    }
`

const NavProfileDiv = styled('div')`
    && {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border: 1px solid #e1e1e1;
        background-color: #fff;
        border-radius: 16px;
        padding: 0 0.5rem;
        box-shadow: 0px 1px 2px 0px #0000004D;        
    }
` 

const FilterCardDiv = styled(Grid)`
    && {
        background-color: #F2EEEB;
        border-radius: 16px;
    }
    .filter-top-right-div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1rem ;
        text-align: center;
    }
    .filter-input-top-left {
        width: 100%;
        border: 0px solid transparent;
        background-color: #E1DBD2;
        border-radius: 100px;        
    }
    .filter-select-top {
        width: 100%;
        border: 0px solid transparent;
        background-color: #E1DBD2;
        border-radius: 100px;
    }
    .setting-icon-div {
        background-color: #000;
        border-radius: 50%;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 0.5rem;
    }
    .setting-icon {
        color: #68DA6A;
    }
`

const defaultTheme = createTheme();
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Dashboard() {
    const [open, setOpen] = React.useState(false);
    // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(event.currentTarget);
    //   };
      const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
    
    //   const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    //   };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Drawer variant="permanent" open={open} sx={{ backgroundColor: "#052E2B" }}>
                    <LeftSideBarItems>
                        <LeftSideBarItem>
                            <IconButton onClick={toggleDrawer}>
                                <MenuIcon sx={{ color: '#fff' }} />
                            </IconButton>
                        </LeftSideBarItem>
                        <div style={{ padding: "0rem 0.5rem" }}>
                            <AddButtonDiv>
                                <AddIcon />
                            </AddButtonDiv>
                        </div>
                        {
                            mainListItemsArray.map((item, index) => {
                                return (
                                    <LeftSideBarItem>
                                        <MenuItemDiv selected={index == 2}>
                                            <div className="icon-class" color='#052E2B' >
                                                {item.icon}
                                            </div>
                                            <p style={{ color: "white" }}>
                                                {item?.name}
                                            </p>
                                        </MenuItemDiv>
                                    </LeftSideBarItem>
                                )
                            })
                        }
                    </LeftSideBarItems>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.grey[100],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }}>
                        <NavBar>
                            <Typography variant="h6" gutterBottom>
                                Procurement
                            </Typography>
                            <div className='navbar-right'>
                                <div className='search-icon-div'>
                                    <SearchIcon sx={{ fontSize: "small" }} />
                                </div>
                                <Badge color="error" variant="dot">
                                    <NotificationsNoneIcon />
                                </Badge>
                                <AppsIcon />
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <NavProfileDiv>
                                            <Avatar alt="Remy Sharp" src="https://imgs.search.brave.com/bFF8_xQy_-cBA55VIKAy68h8rgyZDOyvB5FXxL1xR5g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1LzEwLzQ3/LzM2MF9GXzY1MTA0/NzE4X3gxN2E3Nnd6/V0tJbTNCbGhBNnV5/WVZrRHM5OTgyYzZx/LmpwZw" sx={{ width: 24, height: 24 }}/>
                                            <Typography variant="caption" sx={{ color: "#000" }}>Daniel Rogers</Typography>
                                            <ArrowDropDownIcon />
                                        </NavProfileDiv>
                                    </IconButton>
                                    </Tooltip>
                                    
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                        >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </div>
                        </NavBar>
                        <FilterCardDiv container spacing={5}>
                            <Grid item xs={12} md={2} lg={4}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Grid container>
                                        <Grid item lg={6}>
                                            <Input
                                                id="input-with-icon-adornment"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <SailingOutlinedIcon />
                                                    </InputAdornment>
                                                }
                                                endAdornment={
                                                    <InputAdornment position="start">
                                                        <SearchIcon />
                                                    </InputAdornment>
                                                }
                                                className='filter-input-top-left'
                                                disableUnderline
                                                />
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div className='filter-top-right-div'>
                                                <Select
                                                    labelId="filter-select-top"
                                                    id="filter-select-top"
                                                    value={"po"}
                                                    onChange={() => {}}
                                                    className='filter-select-top'
                                                >
                                                    <MenuItem value={"po"}>PO</MenuItem>
                                                    <MenuItem value={"wo"}>WO</MenuItem>
                                                    <MenuItem value={"cr"}>CR</MenuItem>
                                                </Select>
                                                <div className='setting-icon-div'>
                                                    <Badge badgeContent={10} color='success'>
                                                        <TuneIcon className='setting-icon'/>
                                                    </Badge>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={8}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                </Paper>
                            </Grid>
                        </FilterCardDiv>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}