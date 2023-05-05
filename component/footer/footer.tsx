import Link from "next/link";

export default function FooterLayout() {
    return (
        <footer className='bg-secondary bg-opacity-25 px-5'>
            <span>
                © 2023 &nbsp;
                <Link 
                    href="https://www.facebook.com/profile.php?id=100087205764882"
                    className='text-decoration-none'
                >
                    DevAsNew
                </Link> 
                &nbsp; - v1.0.0
            </span>
        </footer>
    );
}
