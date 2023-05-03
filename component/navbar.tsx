import Image from "next/Image";
import navbarImg from "../public/next.svg"
import Link from "next/link";

export default function NavbarLayout() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient bg-opacity-50">
            <div className="container-fluid mx-5 px-5">
                <Link className="navbar-brand" href="">
                    <Image src={navbarImg} alt="Vercel Logo" width="75" height="75"></Image>
                </Link>
                <button className="btn btn-lg btn-primary bg-gradient shadow-lg">
                    <i className="bi bi-person-circle me-2"></i>
                    LOG IN
                </button>
            </div>
         </nav>
    );
}
