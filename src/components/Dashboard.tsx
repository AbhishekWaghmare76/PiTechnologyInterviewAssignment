import AddIcon from "@mui/icons-material/Add";
import AppsIcon from "@mui/icons-material/Apps";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import {
    Avatar,
    Badge,
    Button,
    Input,
    InputAdornment,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Select,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import {
    createTheme,
    ThemeProvider,
} from "@mui/material/styles";
import moment from "moment";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import orderFileData from "../assets/data/orders.json";
import { mainListItemsArray } from "./listItems";
import OrderDetails from "./OrderDetails";
import { AddButtonDiv, Drawer, FilterCardDiv, FilterDropdownBtn, LeftSideBarItem, LeftSideBarItems, MenuItemDiv, NavBar, NavProfileDiv, OrderListDiv, OrderListItem, StyledMenu } from "./StyledComponents";

const defaultTheme = createTheme();
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface Order {
    id: number;
    order_id: string;
    title: string;
    status: string;
    type: string;
  }
export default function Dashboard() {

    const params = useParams();
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const [orderData, setOrderData] = React.useState<Order[]>(orderFileData);
    const [filteredOrderData, setFilteredOrderData] = React.useState<Order[]>(orderFileData);
    const [selectedOrder, setSelectedOrder] = React.useState<any>(orderData[0]);
    const [searchKey, setSearchKey] = React.useState<string>("");

    const toggleDrawer = () => {
        setOpen(!open);
    };
      
    const searchJSON = (searchKey: string) => {
        if (searchKey) {
            const searchKeys: string[] = ['id', 'order_id', 'title', 'status', 'type'];
            const results: Order[] = orderData.filter((order: Order | undefined) => {
                const search = searchKeys.map((key: string) => {
                    return (
                      order !== undefined &&
                      order.hasOwnProperty(key) &&
                      order[key].toString().toLowerCase().includes(searchKey.toLowerCase())
                    );
                  });
              return search.some((value: boolean) => value === true)
            });
            setFilteredOrderData(results)
        }
        else {
            setFilteredOrderData([... orderData])
        }
    }

    React.useEffect (() => {
        searchJSON(searchKey)
    }, [searchKey])

    React.useEffect (() => {
        if (params["order-id"]) {
            const order = orderData.find((order) => order.id === parseInt(params["order-id"]));
            setSelectedOrder(order);
        }
        else {
            const id = orderData[0]?.id;
            navigate(`/${id}`, { replace: true })
        }
    }, [params])

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const onOrderClicked = (e: any, order: any) => {
        e.preventDefault();
        // console.log(order);
        navigate(`/${order?.id}`, { replace: true });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: "flex", backgroundColor: "#f5f5f5" }}>
                <CssBaseline />
                <Drawer
                    variant="permanent"
                    open={open}
                    sx={{ backgroundColor: "#052E2B" }}
                >
                    <LeftSideBarItems>
                        <LeftSideBarItem>
                            <IconButton onClick={toggleDrawer}>
                                <MenuIcon sx={{ color: "#fff" }} />
                            </IconButton>
                        </LeftSideBarItem>
                        <div style={{ padding: "0rem 0.5rem" }}>
                            <AddButtonDiv>
                                <AddIcon />
                            </AddButtonDiv>
                        </div>
                        {mainListItemsArray.map((item, index) => {
                            return (
                                <LeftSideBarItem>
                                    <MenuItemDiv selected={index == 2}>
                                        <div className="icon-class" color="#052E2B">
                                            {item.icon}
                                        </div>
                                        <p style={{ color: "white" }}>{item?.name}</p>
                                    </MenuItemDiv>
                                </LeftSideBarItem>
                            );
                        })}
                    </LeftSideBarItems>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) => theme.palette.grey[100],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }}>
                        <NavBar>
                            <Typography variant="h6" gutterBottom>
                                Procurement
                            </Typography>
                            <div className="navbar-right">
                                <div className="search-icon-div">
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
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src="https://imgs.search.brave.com/bFF8_xQy_-cBA55VIKAy68h8rgyZDOyvB5FXxL1xR5g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1LzEwLzQ3/LzM2MF9GXzY1MTA0/NzE4X3gxN2E3Nnd6/V0tJbTNCbGhBNnV5/WVZrRHM5OTgyYzZx/LmpwZw"
                                                    sx={{ width: 24, height: 24 }}
                                                />
                                                <Typography variant="caption" sx={{ color: "#000" }}>
                                                    Daniel Rogers
                                                </Typography>
                                                <ArrowDropDownIcon />
                                            </NavProfileDiv>
                                        </IconButton>
                                    </Tooltip>

                                    <Menu
                                        sx={{ mt: "45px" }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
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
                        <Grid
                            container
                            spacing={5}
                            style={{ padding: "0rem", margin: "0rem", width: "100%" }}
                        >
                            <Grid
                                item
                                xs={12}
                                md={2}
                                lg={4}
                                style={{ padding: 0, margin: 0 }}
                            >
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        backgroundColor: "#f5f5f5",
                                        border: "none",
                                        boxShadow: "none",
                                    }}
                                >
                                    <FilterCardDiv
                                        container
                                        style={{
                                            lineHeight: "1rem",
                                            backgroundColor: "#F2EEEB",
                                            padding: "1rem",
                                        }}
                                        p={0}
                                    >
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
                                                className="filter-input-top-left"
                                                disableUnderline
                                                size="medium"
                                                onChange={(e) => {setSearchKey(e.target.value)}}
                                                sx={{ paddingLeft: "0.5rem", minHeight: "100%" }}
                                            />
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div className="filter-top-right-div">
                                                <Select
                                                    labelId="filter-select-top"
                                                    id="filter-select-top"
                                                    value={"po"}
                                                    onChange={() => { }}
                                                    className="filter-select-top"
                                                    size="small"
                                                >
                                                    <MenuItem value={"po"}>PO</MenuItem>
                                                    <MenuItem value={"wo"}>WO</MenuItem>
                                                    <MenuItem value={"cr"}>CR</MenuItem>
                                                </Select>
                                                <div className="setting-icon-div">
                                                    <Badge badgeContent={10} color="success">
                                                        <TuneIcon className="setting-icon" />
                                                    </Badge>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <TextField
                                                id="coy_id_filter_input"
                                                label="Coy id"
                                                placeholder="Enter coy id"
                                                variant="standard"
                                                sx={{ padding: "0.75rem 0rem", marginRight: "1rem" }}
                                            />
                                        </Grid>
                                        <Grid item lg={6}>
                                            <TextField
                                                id="order_no_filter_input"
                                                label="Order no"
                                                placeholder="Enter order no"
                                                variant="standard"
                                                sx={{ padding: "0.75rem 0rem", marginLeft: "1rem" }}
                                            />
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <FilterDropdownBtn
                                                    id="demo-customized-button"
                                                    aria-controls={
                                                        open ? "demo-customized-menu" : undefined
                                                    }
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? "true" : undefined}
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
                                                        "aria-labelledby": "demo-customized-button",
                                                    }}
                                                    anchorEl={anchorElUser}
                                                    open={open}
                                                    onClose={() => { }}
                                                >
                                                    <MenuItem
                                                        onClick={(e) => {
                                                            console.log(e);
                                                        }}
                                                        disableRipple
                                                    >
                                                        Status
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={(e) => {
                                                            console.log(e);
                                                        }}
                                                        disableRipple
                                                    >
                                                        Type
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={(e) => {
                                                            console.log(e);
                                                        }}
                                                        disableRipple
                                                    >
                                                        Authorised by
                                                    </MenuItem>
                                                </StyledMenu>
                                                <FilterDropdownBtn
                                                    id="demo-customized-button"
                                                    aria-controls={
                                                        open ? "demo-customized-menu" : undefined
                                                    }
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? "true" : undefined}
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
                                                        "aria-labelledby": "demo-customized-button",
                                                    }}
                                                    anchorEl={anchorElUser}
                                                    open={open}
                                                    onClose={() => { }}
                                                >
                                                    <MenuItem
                                                        onClick={(e) => {
                                                            console.log(e);
                                                        }}
                                                        disableRipple
                                                    >
                                                        Status
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={(e) => {
                                                            console.log(e);
                                                        }}
                                                        disableRipple
                                                    >
                                                        Type
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={(e) => {
                                                            console.log(e);
                                                        }}
                                                        disableRipple
                                                    >
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
                                                    onClick={() => { }}
                                                >
                                                    Clear
                                                </FilterDropdownBtn>
                                                <FilterDropdownBtn
                                                    id="demo-customized-button"
                                                    variant="contained"
                                                    disableElevation
                                                    onClick={() => { }}
                                                >
                                                    Search
                                                </FilterDropdownBtn>
                                            </div>
                                        </Grid>
                                    </FilterCardDiv>

                                    <OrderListDiv>
                                        <p className="heading">
                                            ORDERS{" "}
                                            <div className="count-div">{orderData?.length || 0}</div>
                                        </p>
                                        <List sx={{ width: "100%", bgcolor: "unset", height: "60vh", overflowY: "scroll" }}>
                                            {filteredOrderData.map((order, index) => {
                                                return (
                                                    <ListItem
                                                        key={index + 1}
                                                        disablePadding
                                                        onClick={(e) => {
                                                            onOrderClicked(e, order);
                                                        }}
                                                    >
                                                        <OrderListItem
                                                            selected={
                                                                selectedOrder?.order_id === order?.order_id
                                                            }
                                                            orderDivis={
                                                                (index + 1) % 2 == 0
                                                                    ? 2
                                                                    : (index + 1) % 3 == 0
                                                                        ? 3
                                                                        : 1
                                                            }
                                                        >
                                                            <div className="upper-div">
                                                                <div>
                                                                    <ListItemText
                                                                        disableTypography
                                                                        className="order-id"
                                                                        primary={order?.order_id}
                                                                    />
                                                                    <ListItemText
                                                                        disableTypography
                                                                        className="order-title"
                                                                        primary={order?.title}
                                                                    />
                                                                </div>
                                                                <div className="order-status">
                                                                    {order?.status}
                                                                </div>
                                                            </div>
                                                            <div className="lower-div">
                                                                <div>
                                                                    <Button
                                                                        component="label"
                                                                        role={undefined}
                                                                        variant="contained"
                                                                        tabIndex={-1}
                                                                        startIcon={<SailingOutlinedIcon />}
                                                                        style={{
                                                                            backgroundColor: "#80E7FF",
                                                                            color: "#04487F",
                                                                            borderRadius: "8px",
                                                                            boxShadow: "none",
                                                                        }}
                                                                    >
                                                                        Lorem Ipsum
                                                                    </Button>
                                                                </div>
                                                                <div>
                                                                    <ListItemText
                                                                        disableTypography
                                                                        className="order-type"
                                                                        primary={order?.type}
                                                                    />
                                                                    <ListItemText
                                                                        disableTypography
                                                                        className="order-type"
                                                                        primary={moment(
                                                                            order?.authorised_supplier_info
                                                                                ?.date_authorised
                                                                        ).format("DD MMM YYYY")}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </OrderListItem>
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    </OrderListDiv>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={8} style={{ padding: "16px" }}>
                                <OrderDetails selectedOrder={selectedOrder} />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}