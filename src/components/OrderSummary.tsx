import { Divider, Link, Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { OrderSummaryDiv } from "./StyledComponents";
import moment from "moment";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FaxOutlinedIcon from '@mui/icons-material/FaxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { isObjectEmpty } from "../helpers/app_methods";
const OrderSummary = (props: any)=> {
    // console.log(props.selectedOrder);
    
    return (
        <OrderSummaryDiv>
            <div className="bord-rad-div">
                <div className="compo-title-div">
                    <Typography variant="h6" fontWeight={600}>CONPONENTS</Typography>
                    <div className="compo-count-div">{props.selectedOrder?.components?.length || 0}</div>
                </div>
                <div className="compo-render">
                    {props.selectedOrder?.components && props.selectedOrder?.components?.length ? props.selectedOrder?.components?.map((component: any, index: number) => (
                        <div key={index}>
                            <Typography variant="h6" fontWeight={600}>{component?.name}</Typography>
                            <Typography variant="body2" color="textSecondary">{component?.description}</Typography>
                        </div>
                    ))
                        : 
                        <Typography color="textSecondary" fontStyle="italic" fontSize={"14px"}>No components found</Typography>
                        }
                </div>
            </div>
            <div className="bord-rad-div">
                <div className="compo-title-div">
                    <Typography variant="h6" fontWeight={600}>AUTHORIZED SUPPLIER</Typography>
                    <div className="compo-ref-id-div"> Ref: {props.selectedOrder?.authorised_supplier_info?.ref_id}</div>
                </div>
                    {
                        props.selectedOrder?.authorised_supplier_info && !isObjectEmpty(props.selectedOrder?.authorised_supplier_info) ?
                        <>
                <div className="order-head-base">
                    <div className="base-div">
                        <div className="base-head">Date Authorised</div>
                        <div className="base-base">
                            {props.selectedOrder?.authorised_supplier_info?.date_authorised ? moment(props.selectedOrder?.authorised_supplier_info?.date_authorised).format(
                                "DD MMM YYYY"
                            ) : "-"}
                        </div>
                    </div>
                    <div className="base-div">
                        <div className="base-head">Authorized By</div>
                        <div className="base-base">{props.selectedOrder?.authorised_supplier_info?.authrised_by}</div>
                    </div>
                    <div className="base-div">
                        <div className="base-head">Invoice Chased Date</div>
                        <div className="base-base">
                            {props.selectedOrder?.authorised_supplier_info?.invoice_chased_date ? moment(props.selectedOrder?.authorised_supplier_info?.invoice_chased_date).format(
                                "DD MMM YYYY"
                            ) : "-"}
                        </div>
                    </div>
                    <div className="base-div">
                        <div className="base-head">PO Chased Date</div>
                        <div className="base-base">
                            {props.selectedOrder?.authorised_supplier_info?.po_chased_date ? moment(props.selectedOrder?.authorised_supplier_info?.po_chased_date).format(
                                "DD MMM YYYY"
                            ) : "-"}
                        </div>
                    </div>
                    <div className="base-div">
                        <div className="base-head">PO Confirmed Date</div>
                        <div className="base-base">
                            {props.selectedOrder?.authorised_supplier_info?.po_confirmed_date ? moment(props.selectedOrder?.authorised_supplier_info?.po_confirmed_date).format(
                                "DD MMM YYYY"
                            ) : "-"}
                        </div>
                    </div>
                    <div className="base-div">
                        <div className="base-head">PO Ref No.</div>
                        <div className="base-base">
                            {props.selectedOrder?.authorised_supplier_info?.po_ref_no ??  "-"}
                        </div>
                    </div>


                </div>
                <div className="supplier-info-div">
                    <Typography className="supplier-name">{props.selectedOrder?.authorised_supplier_info?.supplier_name}</Typography>
                    <Rating name="read-only" value={props.selectedOrder?.authorised_supplier_info?.rating} precision={0.5}  readOnly className="supplier-rating" />
                    <Typography className="supplier-contact-span"><Link href="#" underline="always" className="supplier-contact"><LocationOnOutlinedIcon style={{ fontSize: '1.1rem' }}/>&nbsp;{ props.selectedOrder?.authorised_supplier_info?.address}</Link></Typography>
                    <Typography className="supplier-contact-span"><Link href="#" underline="always" className="supplier-contact"><CallOutlinedIcon style={{ fontSize: '1.1rem' }}/>&nbsp;{ props.selectedOrder?.authorised_supplier_info?.landline_no}</Link></Typography>
                    <Typography className="supplier-contact-span"><Link href="#" underline="always" className="supplier-contact"><FaxOutlinedIcon style={{ fontSize: '1.1rem' }}/>&nbsp;{ props.selectedOrder?.authorised_supplier_info?.phone_no}</Link></Typography>
                    <Typography className="supplier-contact-span"><Link href={`mailto:${props.selectedOrder?.authorised_supplier_info?.email}`} underline="always" className="supplier-contact"><EmailOutlinedIcon style={{ fontSize: '1.1rem' }}/>&nbsp;{ props.selectedOrder?.authorised_supplier_info?.email}</Link></Typography>
                </div>
                </>
                    : <Typography color="textSecondary" fontStyle="italic" fontSize={"14px"}>No authorized supplier found</Typography>
                }
            </div>
            <div className="bord-rad-div">
                <div className="compo-title-div">
                    <Typography variant="h6" fontWeight={600}>SUPPLIERS</Typography>
                    <div className="compo-count-div"> {props.selectedOrder?.suppliers?.length || 0}</div>
                </div>
                <div className="supplier-table-div">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow className="table-head-row">
                                    <TableCell width={"2rem"}>Status</TableCell>
                                    <TableCell>Supplier Name</TableCell>
                                    <TableCell align="right">Goods</TableCell>
                                    <TableCell align="right">Freight</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                    <TableCell align="right">Cur</TableCell>
                                    <TableCell align="right">Base (USD)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {props.selectedOrder?.suppliers?.map((row: any, index: number) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <div className="status-div">
                                            {row?.status}
                                        </div>
                                    </TableCell>
                                    <TableCell>{row?.supplier_name}</TableCell>
                                    <TableCell align="right">{row?.goods}</TableCell>
                                    <TableCell align="right">{row?.freight}</TableCell>
                                    <TableCell align="right">{row?.total}</TableCell>
                                    <TableCell align="right">{row?.currency}</TableCell>
                                    <TableCell align="right">{row?.base_usd}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </OrderSummaryDiv>
    )
}

export default OrderSummary;