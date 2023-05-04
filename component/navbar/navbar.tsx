import Image from "next/image";
import AROlogo from "../../public/image/AROlogo.png"
import ARObanner from "../../public/image/crop_banner.jpg"
import Link from "next/link";

export default function NavbarLayout() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient bg-opacity-50">
        
        <nav 
            className="navbar navbar-expand-lg navbar-light" 
            style={{ backgroundImage : `url(${ARObanner.src})` }}
        >
            <div className="container-fluid mx-5">
                <Link className="navbar-brand" href="">
                    <Image src={AROlogo} alt="ARO Logo" width="250" height="100"></Image>
                </Link>
                <button className="btn btn-lg btn-primary bg-gradient shadow-lg">
                    <i className="bi bi-person-circle me-2"></i>
                    LOG IN
                </button>
            </div>
         </nav>
    );
}
