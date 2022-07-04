import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-light navbar-expand-lg fixed-top py-3">
          <div className="container">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div>
                    HonesTeen
                </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarTogglerDemo02" className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <Link to="/login" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                    <button
                      className="btn btn-primary shadow ms-2"
                      type="button"
                      style={{
                        fontSize: "16px",
                        paddingRight: "20px",
                        paddingLeft: "20px",
                        backgroundColor: "#fff",
                        color: "#316CF5"
                      }}
                    >
                      Login
                    </button>
                  </li>
                </Link>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <li className="nav-item">
                    <button
                      className="btn btn-primary shadow ms-2"
                      type="button"
                      style={{
                        fontSize: "16px",
                        paddingRight: "20px",
                        paddingLeft: "20px"
                      }}
                    >
                      Sign Up
                    </button>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      );
}

export default Navbar;