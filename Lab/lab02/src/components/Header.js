export default function Header() {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none fs-3 fw-medium">
                        {`Pizza House`}
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-4 text-secondary">Home</a></li>
                        <li><a href="#" className="nav-link px-4 text-white">Contact</a></li>
                        <li><a href="#" className="nav-link px-4 text-white">About Us</a></li>
                    </ul>

                    <div className="d-flex align-items-center col-lg-4">
                        <form className="col-12 col-lg-12 mb-3 mb-lg-0 me-lg-1">
                            <input type="search" className="form-control form-control-dark" style={{ width: "100%" }} placeholder="Search..." aria-label="Search"></input>
                        </form>
                        <button className="btn btn-danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header >
    )
}