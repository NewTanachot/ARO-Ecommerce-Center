import ProductTableBody from "./producttablebody";
import IProductTableBody from "@/Types&Interfaces/IProductTableData";

const tableData : IProductTableBody[] = [
    {
        productSku : "TSH-356-GRN-S",
        productName : "เสื้อยืดสีเขียว",
        productQuantity : 9,
        updateDate : "2023/04/27 เวลา 23.32 น."
    },
    {
        productSku : "TSH-356-GRN-M",
        productName : "เสื้อยืดสีเขียว",
        productQuantity : 13,
        updateDate : "2023/04/27 เวลา 23.32 น."
    },
    {
        productSku : "PLS-356-RED-L",
        productName : "เสื้อโปโลสีแดง",
        productQuantity : 8,
        updateDate : "2023/04/27 เวลา 23.32 น."
    },
    {
        productSku : "PLS-356-RED-XL",
        productName : "เสื้อโปโลสีแดง",
        productQuantity : 11,
        updateDate : "2023/04/27 เวลา 23.32 น."
    },
    {
        productSku : "TSH-356-BLU-L",
        productName : "เสื้อยืดสีฟ้า",
        productQuantity : 999,
        updateDate : "2023/04/27 เวลา 23.23 น."
    }
];

export default function productTable() {
    return (
        <div className="my-4">
            <table id='ProductTable' className="table table-bordered border-secondary table-striped">
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
                    {tableData.map(x => (
                        <ProductTableBody data={x}></ProductTableBody>
                    ))}
                </tbody>
            </table>
        </div>
    );
}