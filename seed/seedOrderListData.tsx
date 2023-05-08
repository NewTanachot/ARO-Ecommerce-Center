import IOrderListData from "../Types&Interfaces/order/IOrderListData";

const orderData : IOrderListData[] = [
    {
        orderId : "0001",
        orderProduct : [
            {
                productSku : "TSH-356-GRN-M",
                productQuantity : 1
            },
            {
                productSku : "TSH-356-GRN-L",
                productQuantity : 2
            },
            {
                productSku : "TSH-356-GRN-XL",
                productQuantity : 3
            },
        ],
        productQuantity : 1,
        orderFrom : "Shopee",
        orderDate : "2023/04/27 | 23.32 น."
    },
    {
        orderId : "0002",
        orderProduct : [
            {
                productSku : "TSH-356-GRN-M",
                productQuantity : 1
            },
        ],
        productQuantity : 1,
        orderFrom : "Tiktok",
        orderDate : "2023/04/26 | 23.32 น."
    },
    {
        orderId : "0003",
        orderProduct : [
            {
                productSku : "TSH-356-GRN-M",
                productQuantity : 1
            },
            {
                productSku : "TSH-356-GRN-XL",
                productQuantity : 10
            },
        ],
        productQuantity : 1,
        orderFrom : "Lazada",
        orderDate : "2023/04/25 | 23.32 น."
    },
    {
        orderId : "0001",
        orderProduct : [
            {
                productSku : "TSH-356-GRN-M",
                productQuantity : 1
            },
            {
                productSku : "TSH-356-GRN-L",
                productQuantity : 2
            },
            {
                productSku : "TSH-356-GRN-XL",
                productQuantity : 3
            },
        ],
        productQuantity : 1,
        orderFrom : "Shopee",
        orderDate : "2023/04/24 | 23.32 น."
    },
    {
        orderId : "0001",
        orderProduct : [
            {
                productSku : "TSH-356-GRN-M",
                productQuantity : 1
            },
        ],
        productQuantity : 1,
        orderFrom : "Facebook",
        orderDate : "2023/04/23 | 23.32 น."
    },
];

export default orderData