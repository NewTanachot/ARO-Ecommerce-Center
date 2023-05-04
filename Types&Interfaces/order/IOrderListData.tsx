import IOrderProductListData from "./IOrderProductListData";

export default interface IOrderListData {
    orderId : string;
    orderProduct : IOrderProductListData[];
    productQuantity : number;
    orderFrom : string;
    orderDate : string;
};