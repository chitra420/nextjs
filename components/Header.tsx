import Link from "next/link"

export default function Header(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href='/' legacyBehavior>
                                <a className="nav-link active" aria-current="page">Home</a>
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link href='/about' legacyBehavior>
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/contact' legacyBehavior>
                                <a className="nav-link">Contact</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/contact-copy' legacyBehavior>
                                <a className="nav-link">Contact-Copy</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/gallery' legacyBehavior>
                                <a className="nav-link">Gallery</a>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}