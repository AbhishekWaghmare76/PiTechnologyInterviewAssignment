import styled from "styled-components";
import { styled as muiStyled, alpha } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Menu, { MenuProps } from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

export const drawerWidth: number = 250;

export const AddButtonDiv = styled("div")({
  padding: "0rem 1.5rem",
  width: "4.5rem",
  height: "4.5rem",
  backgroundColor: "#00704B",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "16px",
  color: "#68DA6A",
});

export const LeftSideBarItems = styled("div")({
  margin: "0 auto",
});

export const LeftSideBarItem = styled("div")({
  padding: "1rem 1.5rem",
});

export const MenuItemDiv = styled.div`
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
    background-color: ${(props: any) =>
      props.selected ? "#00504B" : "#052E2B"};
  }
`;

export const Drawer = muiStyled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#052E2B",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: "90px",
    }),
  },
}));

export const StyledMenu = muiStyled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export const NavBar = styled(Box)`
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
`;

export const NavProfileDiv = styled("div")`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid #e1e1e1;
    background-color: #fff;
    border-radius: 16px;
    padding: 0 0.5rem;
    box-shadow: 0px 1px 2px 0px #0000004d;
  }
`;

export const FilterCardDiv = styled(Grid)`
  && {
    border-radius: 16px;
    box-shadow: 1px 1px 2px 0px #0000004d;
    margin-bottom: 1rem;
  }
  .filter-top-right-div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    text-align: center;
  }
  .filter-input-top-left {
    width: 100%;
    border: 0px solid transparent;
    background-color: #e1dbd2;
    border-radius: 100px;
  }
  .filter-select-top {
    width: 100%;
    border: 0px solid transparent;
    background-color: #e1dbd2;
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
    color: #68da6a;
  }
`;

export const FilterDropdownBtn = styled(Button)`
  && {
    background-color: initial;
    color: initial;
    font-weight: 600;
    padding: 0.5rem 1rem;
    text-decoration: underline;
  }
  &&:hover {
    background-color: initial;
    color: initial;
  }
`;

export const OrderListDiv = styled(Box)`
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
    background-color: #d9d1c6;
    color: #052e2b;
    border-radius: 40%;
    margin-left: 1rem;
    line-height: 14px;
    padding: 5px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const OrderListItem = styled(Box)`
  && {
    width: 100%;
    height: 100%;
    background-color: #e8eced;
    border-radius: 16px;
    margin-top: 1rem;
    padding: 12px 16px 12px 16px;
    border: ${(props: any) =>
      props.selected ? "1px solid #052E2B" : "#E8ECED"};
    box-shadow: ${(props: any) =>
      props.selected ? "0px 5px 8px 0px #00000024" : "none"};
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
    background-color: ${(props: any) =>
      props.orderDivis === 2
        ? "#FF451A"
        : props.orderDivis === 3
        ? "#FF9F1D"
        : "#008A25"};
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
    color: #697e85;
  }
`;

export const OrderDetailsPaper = styled(Paper)`
  && {
    padding: 0px;
    border-radius: 16px;
    /* box-shadow: 1px 1px 2px 0px #0000004d; */
    width: 100%;
    background-color: unset;
    box-shadow: 0px 1px 8px 0px #0000001f;
  }
  .order-detail-title {
    color: #020a08;
    font-weight: 700;
  }
  .order-detail-head {
    padding: 24px 20px;
    background: #e8eced;
    border-radius: 16px 16px 0 0;
    background: linear-gradient(0deg, #e8eced, #e8eced),
      linear-gradient(0deg, #eff1f1, #eff1f1);
  }
  .order-head-head {
    display: flex;
    align-items: center;
  }
  .status-div {
    background-color: #ff451a;
    color: #fff;
    padding: 5px;
    border-radius: 100px;
    margin-right: 1rem;
  }
  .order-head-base {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .base-head {
    color: #697e85;
  }
  .base-base {
    color: #020A08;
    font-weight: 500;
  }
  .order-head-right {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .order-actions-div {
    display: flex;
    justify-content: space-evenly;
    border-width: 1px, 0px, 1px, 0px;
    border-style: solid;
    border-color: #cdd6db;
  }
  .order-action-btn {
    border: none;
    color: #00704b;
  }
`;

export const OrderSummaryDiv = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 60vh;
    overflow-y: scroll;
  }
  .bord-rad-div {
    box-shadow: 0px 1px 8px 0px #0000001f;
    background: linear-gradient(0deg, #e8eced, #e8eced),
      linear-gradient(0deg, #eff1f1, #eff1f1);
    border-radius: 16px;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .compo-title-div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .compo-count-div {
    background: #cdd6db;
    color: #052e2b;
    border-radius: 40%;
    margin-left: 1rem;
    line-height: 14px;
    padding: 5px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .compo-ref-id-div {
    background: #cdd6db;
    color: #052e2b;
    border-radius: 8px;
    margin-left: 1rem;
    line-height: 14px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
  }
  .compo-render {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
  .supplier-name {
    color: #04487f;
    font-weight: 500;
  }
  .supplier-rating {
    margin-bottom: 1.5rem;
  }
  .supplier-contact-span {
    display: flex;
    align-items: center;
    line-height: 1.75rem;
    /* gap: 0.5rem; */
  }
  .supplier-contact {
    color: #00704b;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .supplier-table-div {
    border: 1px solid #cdd6db;
    border-radius: 4px;
  }
  .table-head-row {
    background-color: #f5f5f5;
    box-shadow: 0px 1px 8px 0px #0000001f;
  }
`;
