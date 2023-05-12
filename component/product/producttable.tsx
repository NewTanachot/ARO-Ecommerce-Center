import IProductTableProps from "../../Types&Interfaces/product/IProductTableProps";

export default function productTable({datas} : IProductTableProps) {
    return (
        <div className="mt-4">
            <div className="table-responsive">
                <table 
                    id='ProductTable' 
                    className="table table-bordered border-secondary table-hover shadow-sm"
                >
                    <thead className="bg-danger bg-gradient text-light border-light">
                        <tr className="text-center">
                            <th className="col">ชื่อสินค้า</th>
                            <th className="col">SKU</th>
                            <th className="col-1">จำนวน(ชิ้น)</th>
                            <th className="col-3">อัพเดทล่าสุด</th>
                            <th className="col-3">แก้ไข</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        { 
                            datas.map((data, index) => 
                                <tr className="align-middle" key={index}>
                                    <td>{data.productName}</td>
                                    <td>{data.productSku}</td>
                                    <td>{data.productQuantity}</td>
                                    <td>{data.updateDate}</td>
                                    <td>
                                        <a href="" className="btn btn-primary me-2">
                                            <i className="bi bi-pencil-square me-1"></i>
                                            รายละเอียด
                                        </a>
                                        <a href="" className="btn btn-secondary">
                                            <i className="bi bi-gear me-1"></i>
                                            แก้ไข
                                        </a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}