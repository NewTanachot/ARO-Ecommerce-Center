import SidebarBtn from "./sidebarbtn";

export default function SidebarLayout() {
    return (
        <div className="text-center">
            <div className="d-grid gap-4">
                <SidebarBtn></SidebarBtn>
                <SidebarBtn></SidebarBtn>
                <SidebarBtn></SidebarBtn>
                <SidebarBtn></SidebarBtn>
            </div>
        </div>
    );
}