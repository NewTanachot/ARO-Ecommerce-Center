import IOrderListProps from "../../Types&Interfaces/order/IOrderListProps";

export default function orderList({ data } : IOrderListProps) {
    return (
        <div className="card py-4 mb-2 bg-secondary bg-opacity-10 shadow-sm">
            <div className="row">
                <div className="col text-center">
                    Order: {data.orderId}
                </div>
                <div className="col text-center">
                    { 
                        data.orderProduct.map((product, index) => 
                            <div className="row" key={index}>
                                <div className="col-8 col-lg-6 text-start p-0">
                                    {product.productSku}
                                </div>
                                <div className="col-2 col-lg-3 p-0">
                                    {product.productQuantity}
                                </div>
                                <div className="col-2 col-lg-3 text-lg-start text-center p-0">
                                    ชิ้น
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col text-center">
                    {data.orderDate}
                </div>
                <div className="col text-center">
                    {data.orderFrom}
                </div>
            </div>
        </div>
    );
}