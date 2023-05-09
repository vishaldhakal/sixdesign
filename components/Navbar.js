export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-mine">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/sixdesign-logo.svg"
              alt="six design logo"
              className="img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-lg btn-mine btn-trans">
            Contact us
            <img src="/arrow.svg" alt="arrow" className="img-fluid arrow" />
          </button>
        </div>
      </nav>
    </>
  );
}
