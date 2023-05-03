import IProductTableBodyProps from "../../Types&Interfaces/IProductTableBodyProps";

export default function productTableBody({data} : IProductTableBodyProps) {
    return (
        <>
            <tr className="align-middle">
                <td className="col">{data.productName}</td>
                <td className="col">{data.productSku}</td>
                <td className="col-1">{data.productQuantity}</td>
                <td className="col-3">{data.updateDate}</td>
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