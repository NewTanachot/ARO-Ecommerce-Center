import Link from "next/link";

export default function SidebarBigBtn() {
    return (
        <div>
            <div className="bg-primary bg-gradient rounded-3 shadow w-100 text-light py-3">
                <div className="h3 m-0">
                    สถานะคำสั่งซื้อ
                    <i className="bi bi-box-seam ms-2"></i>
                </div>
                <div className="py-3 px-4 text-start h4 m-0">
                    <div className="border-bottom border-2 py-2">
                        <Link 
                            id="sideBarSubBtn" 
                            href="/" 
                            className="text-light text-decoration-none"
                        >
                            ยังไม่จัดส่ง
                        </Link>
                    </div>
                    <div className="border-bottom border-2 py-2">
                        <Link 
                            id="sideBarSubBtn" 
                            href="/product" 
                            className="text-light text-decoration-none"
                        >
                            กำลังจัดส่ง
                        </Link>
                    </div>
                    <div className="py-2">
                        <Link 
                            id="sideBarSubBtn" 
                            href="/" 
                            className="text-light text-decoration-none"
                        >
                            จัดส่งสำเร็จแล้ว
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}