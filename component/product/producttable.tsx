import IProductTableProps from "../../Types&Interfaces/IProductTableProps";
import ProductTableBody from "./producttablebody";

export default function productTable({datas} : IProductTableProps) {
    return (
        <div className="my-4">
            <table 
                id='ProductTable' 
                className="table table-bordered border-secondary table-striped shadow-sm"
            >
                <thead className="bg-danger bg-gradient text-light border-light">
                    <tr className="text-center">
                        <th>ชื่อสินค้า</th>
                        <th>SKU</th>
                        <th>จำนวน(ชิ้น)</th>
                        <th>อัพเดทล่าสุด</th>
                        <th>แก้ไข</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {datas.map(data => (
                        <ProductTableBody data={data}></ProductTableBody>
                    ))}
                </tbody>
            </table>
        </div>
    );
}