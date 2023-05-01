import Image from "next/image";
import navbarImg from "../../public/next.svg"

export default function NavbarLayout() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container-fluid ms-5 ps-5">
                <a className="navbar-brand" href="">
                    <Image src={navbarImg} alt="Vercel Logo" width="75" height="75"></Image>
                </a>
                <button className="btn btn-lg btn-primary">
                    <i className="bi bi-person-circle me-2"></i>
                    LOG IN
                </button>
            </div>
         </nav>
    );
}
