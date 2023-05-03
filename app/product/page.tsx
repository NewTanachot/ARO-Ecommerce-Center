import ProductTable from "../../component/producttable";

export default function productHome() {
    return (
        <div>
            <div className='bg-primary bg-gradient rounded-3 text-center text-light h1 py-2'>
                จัดการตารางสินค้า
            </div>
            <div className="row my-4">
                <div className="col">
                    <a href='' className='btn btn-lg btn-primary bg-gradient shadow'>
                        <i className="bi bi-gear me-1"></i>
                        แก้ไขสต๊อค
                    </a>
                    {/* <div className='d-inline bg-primary bg-gradient h4 py-2 px-4 rounded-2 text-light mx-2'>
                        จำนวนสินค้า : 50 ชิ้น
                    </div> */}
                    <div className='btn btn-lg btn-primary bg-gradient shadow px-4 mx-2'>
                        จำนวนสินค้า : 50 ชิ้น
                    </div>
                    <a href="" className='btn btn-lg btn-outline-danger bg-gradient shadow-sm border-0 fw-bold'>
                        <i className="bi bi-trash3-fill"></i>
                    </a>
                </div>
                <div className="col text-end">
                    <div className='btn btn-lg btn-primary bg-gradient shadow px-4 mx-2'>
                        จำนวนสินค้า : 50 ชิ้น
                    </div>
                    <a href="" className="btn btn-lg btn-primary bg-gradient shadow">
                        <i className="bi bi-database-add"></i>
                        เพิ่มสินค้า
                    </a>
                </div>
            </div>
            <ProductTable></ProductTable>
        </div>
    );
}