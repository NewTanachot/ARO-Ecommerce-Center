import IProductTableBodyProps from "../../Types&Interfaces/IProductTableBodyProps";

export default function productTableBody({data} : IProductTableBodyProps) {
    return (
        <>
            <tr className="align-middle">
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
        </>
    );
}