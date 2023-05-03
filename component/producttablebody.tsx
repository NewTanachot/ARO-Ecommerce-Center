import IProductTableBody from "@/Types&Interfaces/IProductTableData";

interface IProps {
    data : IProductTableBody
}

export default function productTableBody({data} : IProps) {
    return (
        <>
            <tr>
                <td className="col">{data.productName}</td>
                <td className="col">{data.productSku}</td>
                <td className="col-1">{data.productQuantity}</td>
                <td className="col">{data.updateDate}</td>
                <td className="col">
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
        </>
    );
}