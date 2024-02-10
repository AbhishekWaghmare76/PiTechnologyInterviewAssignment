import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';

const iconColor = "#68DA6A"

export const mainListItemsArray = [
    {
        name: "Orders",
        icon: <LocalShippingOutlined sx={{color:iconColor}} />
    },
    {
        name: "Tickets",
        icon: <WarningAmberOutlinedIcon sx={{color:iconColor}} />
    },
    {
        name: "Suppliers",
        icon: <EngineeringOutlinedIcon sx={{color:iconColor}} />
    },
    {
        name: "Outlets",
        icon: <WaterDropOutlinedIcon sx={{color:iconColor}} />
    },
    {
        name: "Settings",
        icon: <SettingsOutlinedIcon sx={{color:iconColor}} />
    },
    {
        name: "Maintainance",
        icon: <HandymanOutlinedIcon sx={{color: iconColor}} />
    }
]

