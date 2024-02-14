import * as React from 'react';
import { styled as muiStyled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuProps } from '@mui/material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { mainListItemsArray } from './listItems';
import { Avatar, Badge, Button, Input, InputAdornment, List, ListItem, ListItemText, Menu, MenuItem, Select, TextField, Tooltip, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AppsIcon from '@mui/icons-material/Apps';
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';
import orderFileData from '../assets/data/orders.json'
import moment from 'moment';

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

const StyledMenu = muiStyled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

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
        border-radius: 16px;
        box-shadow: 1px 1px 2px 0px #0000004D;
        margin-bottom: 1rem;
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

const FilterDropdownBtn = styled(Button)`
    && {
        background-color: initial;
        color: initial;
        font-weight: 500;
        padding: 0.5rem 1rem;
    }
    &&:hover {
        background-color: initial;
        color: initial
    }
`

const OrderListDiv = styled(Box)`
    && {
        width: 100%;
        height: 100%;
        /* background-color: #fff; */
        border-radius: 16px;
        margin-top: 1rem;
    }
    .heading {
        font-size: 13px;
        font-weight: 600;
        color: #000;
        display: flex;
        align-items: center;
    }
    .count-div {
        background-color: #D9D1C6;
        color: #052E2B;
        border-radius: 40%;
        margin-left: 1rem;
        line-height: 14px;
        padding: 5px 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const OrderListItem = styled(Box)`
    && {
        width: 100%;
        height: 100%;
        background-color: #E8ECED;
        border-radius: 16px;
        margin-top: 1rem;
        padding: 12px 16px 12px 16px;
        border:  ${(props: any) => (props.selected ? "1px solid #052E2B" : "#E8ECED")} ;
        box-shadow: ${(props: any) => (props.selected ? "0px 5px 8px 0px #00000024" : "none")};
        
    }
    .order-id {
        font-size: 14px;
        font-weight: 700;
        color: ${(props: any) => (props.selected ? "#052E2B" : "#00704B")};
    }
    .order-title {
        font-size: 14px;
        font-weight: ${(props: any) => (props.selected ? 600 : 500)};
        color: "#020A08";
    }
    .order-status {
        /* index+1 % 2 ? 2: (index+1)%3 ? 3 : 1 */
        background-color: ${(props: any) => (props.orderDivis === 2 ? "#FF451A" : props.orderDivis === 3 ? "#FF9F1D" : "#008A25")};
        height: fit-content;
        padding: 5px;
        border-radius: 100px;
        color: #fff;
    }
    .upper-div {
        display: flex;
        justify-content: space-between;
        align-items: top;
    }
    .lower-div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* gap: 1rem; */
        /* margin-top: 1rem; */
    }
    .order-type {
        font-size: 12px;
        font-weight: 500;
        color: #697E85;
    }

`

const defaultTheme = createTheme();
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Dashboard() {
    const [open, setOpen] = React.useState(false);
    // const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [orderData, setOrderData] = React.useState<any[]>(orderFileData);
    const [selectedOrder, setSelectedOrder] = React.useState<any>(orderData[0]);
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

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const onOrderClicked = (e: any, order: any) => {
        e.preventDefault();
        console.log(order);
        setSelectedOrder(order);
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex', backgroundColor: "#f5f5f5" }}>
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
                        <Grid container spacing={5} style={{ padding: "0rem", margin: "0rem", width: "100%" }}>
                            <Grid item xs={12} md={2} lg={4} style={{ padding: 0, margin: 0 }}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: "#f5f5f5",
                                        border: "none",
                                        boxShadow: "none"
                                    }}
                                >
                                    <FilterCardDiv container style={{ lineHeight: "1rem", backgroundColor: "#F2EEEB" }} p={0}>
                                        <Grid item lg={6} p={0}>
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
                                                size='medium'
                                                sx={{ paddingLeft: "0.5rem", minHeight: "100%" }}
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
                                                    size='small'
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
                                        <Grid item lg={6}>
                                            <TextField
                                                id="coy_id_filter_input"
                                                label="Coy id"
                                                placeholder='Enter coy id'
                                                variant="standard"
                                                sx={{ padding: "0.75rem 0rem", marginRight: "1rem" }}
                                                />
                                        </Grid>
                                        <Grid item lg={6}>
                                            <TextField
                                                id="order_no_filter_input"
                                                label="Order no"
                                                placeholder='Enter order no'
                                                variant="standard"
                                                sx={{ padding: "0.75rem 0rem", marginLeft: "1rem" }}
                                                />
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <FilterDropdownBtn
                                                    id="demo-customized-button"
                                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    variant="contained"
                                                    disableElevation
                                                    onClick={handleClick}
                                                    endIcon={<KeyboardArrowDownIcon />}
                                                >
                                                    Sort
                                                </FilterDropdownBtn>
                                                <StyledMenu
                                                    id="demo-customized-menu"
                                                    MenuListProps={{
                                                    'aria-labelledby': 'demo-customized-button',
                                                    }}
                                                    anchorEl={anchorElUser}
                                                    open={open}
                                                    onClose={() => {}}
                                                >
                                                    <MenuItem onClick={(e) => {console.log(e)}} disableRipple>
                                                        Status
                                                    </MenuItem>
                                                    <MenuItem onClick={(e) => {console.log(e)}} disableRipple>
                                                        Type
                                                    </MenuItem>
                                                    <MenuItem onClick={(e) => {console.log(e)}} disableRipple>
                                                        Authorised by
                                                    </MenuItem>
                                                </StyledMenu>
                                                <FilterDropdownBtn
                                                    id="demo-customized-button"
                                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    variant="contained"
                                                    disableElevation
                                                    onClick={handleClick}
                                                    endIcon={<KeyboardArrowDownIcon />}
                                                >
                                                    Group by
                                                </FilterDropdownBtn>
                                                <StyledMenu
                                                    id="demo-customized-menu"
                                                    MenuListProps={{
                                                    'aria-labelledby': 'demo-customized-button',
                                                    }}
                                                    anchorEl={anchorElUser}
                                                    open={open}
                                                    onClose={() => {}}
                                                >
                                                    <MenuItem onClick={(e) => {console.log(e)}} disableRipple>
                                                        Status
                                                    </MenuItem>
                                                    <MenuItem onClick={(e) => {console.log(e)}} disableRipple>
                                                        Type
                                                    </MenuItem>
                                                    <MenuItem onClick={(e) => {console.log(e)}} disableRipple>
                                                        Authorised by
                                                    </MenuItem>
                                                </StyledMenu>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div style={{ display: "flex", justifyContent: "end" }}>
                                                <FilterDropdownBtn
                                                    id="demo-customized-button"
                                                    variant="contained"
                                                    disableElevation
                                                    onClick={() => {}}
                                                >
                                                    Clear
                                                </FilterDropdownBtn>
                                                <FilterDropdownBtn
                                                    id="demo-customized-button"
                                                    variant="contained"
                                                    disableElevation
                                                    onClick={() => {}}
                                                >
                                                    Search
                                                </FilterDropdownBtn>
                                            </div>
                                        </Grid>
                                    </FilterCardDiv>

                                    <OrderListDiv>
                                        <p className='heading'>ORDERS <div className='count-div'>{orderData?.length || 0}</div></p>
                                        <List sx={{ width: '100%', bgcolor: 'unset' }}>
                                            {orderData.map((order, index) => {
                                                return (
                                                    <ListItem
                                                        key={index+1}
                                                        disablePadding
                                                        onClick={(e) => {onOrderClicked(e, order)}}
                                                        // secondaryAction={
                                                        //     <IconButton edge="end" aria-label="delete">
                                                        //         <DeleteIcon />
                                                        //     </IconButton>
                                                        // }
                                                    >
                                                        {/* {console.log(index+1 % 2 == 0 ? 2 : (index+1)%3 == 0 ? 3 : 1)} */}
                                                        <OrderListItem selected={selectedOrder?.order_id === order?.order_id} orderDivis={(index+1) % 2 == 0 ? 2 : (index+1)%3 == 0 ? 3 : 1} >
                                                            <div className="upper-div">
                                                                <div>
                                                                    <ListItemText disableTypography className="order-id" primary={order?.order_id} />
                                                                    <ListItemText disableTypography className="order-title" primary={order?.title} />
                                                                </div>
                                                                <div className="order-status">{order?.status}</div>
                                                            </div>
                                                            <div className='lower-div'>
                                                                <div>
                                                                    <Button
                                                                        component="label"
                                                                        role={undefined}
                                                                        variant="contained"
                                                                        tabIndex={-1}
                                                                        startIcon={<SailingOutlinedIcon />}
                                                                        style={{ backgroundColor: "#80E7FF", color: "#04487F", borderRadius: "8px", boxShadow: "none" }}
                                                                        >
                                                                        Lorem Ipsum
                                                                    </Button>
                                                                </div>
                                                                <div>
                                                                <ListItemText disableTypography className="order-type" primary={order?.type} />
                                                                <ListItemText disableTypography className="order-type" primary={moment(order?.authorised_supplier_info?.date_authorised).format('DD MMM YYYY')} />
                                                                </div>
                                                            </div>
                                                        </OrderListItem>
                                                    </ListItem>
                                                )
                                            })}
                                        </List>
                                    </OrderListDiv>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={8}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        width: '100%',
                                    }}
                                    disablePadding
                                >
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}