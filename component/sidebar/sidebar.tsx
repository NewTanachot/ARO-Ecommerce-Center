import SidebarBigBtn from "./sidebarbigbtn";
import SidebarBtn from "./sidebarbtn";

export default function SidebarLayout() {
    return (
        <div className="text-center">
            <div className="d-grid gap-4">
                <SidebarBtn 
                    btnTitle='สินค้าของฉัน'
                    iconClass="bi bi-cart3 ms-2"
                    linkPath="/product"
                ></SidebarBtn>
                <SidebarBigBtn></SidebarBigBtn>
                <SidebarBtn 
                    btnTitle='รายการคำสั่งซื้อ'
                    iconClass="bi bi-journal-text ms-2"
                    linkPath="/order"
                ></SidebarBtn>
                <SidebarBtn 
                    btnTitle='คอมมูนิตี้'
                    iconClass="bi bi-people ms-2"
                    linkPath=""
                ></SidebarBtn>
                <SidebarBtn 
                    btnTitle='การตั้งค่า'
                    iconClass="bi bi-gear ms-2"
                    linkPath=""
                ></SidebarBtn>
            </div>
        </div>
    );
}