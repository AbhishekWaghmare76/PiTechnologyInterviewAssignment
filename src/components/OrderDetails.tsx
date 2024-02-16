import { Button, Grid, Tab, Tabs, Typography, Box } from "@mui/material";
import { FilterDropdownBtn, OrderDetailsPaper } from "./StyledComponents";
import { useEffect, useState } from "react";
import moment from "moment";
import TabPanel from "./TabPanel";
import OrderSummary from "./OrderSummary";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import PrintIcon from '@mui/icons-material/Print';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AdsClickIcon from '@mui/icons-material/AdsClick'
import { isObjectEmpty } from "../helpers/app_methods";

const OrderDetails = (props: any) => {

    const [selectedOrder, setSelectedOrder] = useState<any>(props.selectedOrder ?? {});

    useEffect(() => {
        setSelectedOrder(props.selectedOrder);
    }, [props.selectedOrder]);

    return props.selectedOrder && !isObjectEmpty(props.selectedOrder) ? (
        <OrderDetailsPaper>
            <Grid
                container
                spacing={5}
                style={{
                    padding: "0rem",
                    margin: "0rem",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1.5rem",
                    background: "linear-gradient(0deg, #E8ECED, #E8ECED), linear-gradient(0deg, #EFF1F1, #EFF1F1)"

                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    lg={8}
                    style={{ padding: 0, margin: 0 }}
                >
                    <div className="order-head-head">
                        <div className="status-div">
                            {selectedOrder?.status}
                        </div>
                        <Typography className="order-detail-title">
                            {selectedOrder?.order_id} &nbsp; {selectedOrder.title}
                        </Typography>
                    </div>
                    <div className="order-head-base">
                        <div className="base-div">
                            <div className="base-head">Date Requested</div>
                            <div className="base-base">
                                {moment(selectedOrder?.date_requested).format(
                                    "DD MMM YYYY"
                                )}
                            </div>
                        </div>
                        <div className="base-div">
                            <div className="base-head">Type</div>
                            <div className="base-base">{selectedOrder?.type}</div>
                        </div>
                        <div className="base-div">
                            <div className="base-head">Account Code</div>
                            <div className="base-base">
                                {selectedOrder?.account_code}
                            </div>
                        </div>
                    </div>
                </Grid>
                <div className="order-head-right">
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
                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <FilterDropdownBtn
                            id="demo-customized-button"
                            variant="contained"
                            disableElevation
                            onClick={() => { }}

                        >
                            Order Summary
                        </FilterDropdownBtn>
                        <FilterDropdownBtn
                            id="demo-customized-button"
                            variant="contained"
                            disableElevation
                            onClick={() => { }}
                        >
                            Order Progress
                        </FilterDropdownBtn>
                    </div>
                </div>
            </Grid>
            <Box className="order-actions-div">
                <Button variant="outlined" startIcon={<SaveAsIcon />} className="order-action-btn">
                    Edit Order Details
                </Button>
                <Button variant="outlined" startIcon={<PrintIcon />} className="order-action-btn">
                    Print Order Details
                </Button>
                <Button variant="outlined" startIcon={<FileOpenIcon />} className="order-action-btn">
                    Change Delivery Status
                </Button>
                <Button variant="outlined" startIcon={<TextSnippetIcon />} className="order-action-btn">
                    Reports
                </Button>
                <Button variant="outlined" startIcon={<AdsClickIcon />} className="order-action-btn">
                    Actions
                </Button>

            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={1} onChange={(e) => { console.log('tab changed', e) }} aria-label="basic tabs example" variant="scrollable">
                    <Tab label="Summary" value={1} />
                    <Tab label="Order Lines" value={2} />
                    <Tab label="Suppliers" value={3} />
                    <Tab label="Analysis" value={4} />
                    <Tab label="Freight Details" value={5} />
                    <Tab label="Delivery" value={6} />
                    <Tab label="Invoice" value={7} />
                    <Tab label="Memos" value={8} />
                    <Tab label="Notes & Attachments" value={9} />
                    <Tab label="Budgets" value={10} />
                </Tabs>
            </Box>
            <TabPanel index={1} value={1}><OrderSummary selectedOrder={selectedOrder} /></TabPanel>
        </OrderDetailsPaper>
    ) : 
    <OrderDetailsPaper>
        <Typography color="textSecondary" fontStyle="italic" fontSize={"14px"}>No order selected</Typography>
    </OrderDetailsPaper>
}

export default OrderDetails;