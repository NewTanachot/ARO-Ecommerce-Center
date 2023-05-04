import IProductTableProps from "../../Types&Interfaces/product/IProductTableProps";
import ProductTableBody from "./producttablebody";

export default function productTable({datas} : IProductTableProps) {
    return (
        <div className="my-4">
            <div className="table-responsive">
                <table 
                    id='ProductTable' 
                    className="table table-bordered border-secondary table-striped shadow-sm"
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
                            datas.map(data => <ProductTableBody key={data.productSku} data={data}></ProductTableBody>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}