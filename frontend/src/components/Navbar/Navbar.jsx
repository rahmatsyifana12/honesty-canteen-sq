import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from 'jwt-decode';

function Navbar() {
    const [accessToken, setAccessToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const rawAccessToken = localStorage.getItem('accessToken');
        setAccessToken(rawAccessToken);
    }, [accessToken]);

    const logout = async () => {
        if (!accessToken) {
            navigate('/');
            return;
        }
        try{
            const response = await axios.delete('http://localhost:5000/api/v1/auth/logout', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            localStorage.setItem('accessToken', '');

            navigate('/');
        } catch(error) {
            if (error.response) {
                if (error.response.status === 401) {
                    localStorage.setItem('accessToken', '');
                    navigate('/');
                }
            }
        }
    }

    return (
        <nav className="navbar navbar-light navbar-expand-lg py-3">
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
                {
                    !localStorage.getItem('accessToken') &&
                    <>
                        <Link to="/products" style={{ textDecoration: "none" }}>
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
                                View Products
                                </button>
                            </li>
                        </Link>
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
                    </>
                }

                {
                    localStorage.getItem('accessToken') &&
                    <>
                        <Link to="/inboxes" style={{ textDecoration: "none" }}>
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
                                Inbox
                                </button>
                            </li>
                        </Link>
                        <Link to="/canteen" style={{ textDecoration: "none" }}>
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
                                Balance Box
                                </button>
                            </li>
                        </Link>
                        <Link to="/products" style={{ textDecoration: "none" }}>
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
                                View Products
                                </button>
                            </li>
                        </Link>
                        <Link to="/products/add" style={{ textDecoration: "none" }}>
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
                                Add Product
                                </button>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <button
                            className="btn btn-primary shadow ms-2"
                            type="button"
                            onClick={logout}
                            style={{
                                fontSize: "16px",
                                paddingRight: "20px",
                                paddingLeft: "20px"
                            }}
                            >
                            Sign Out
                            </button>
                        </li>
                    </>
                }
              </ul>
            </div>
          </div>
        </nav>
      );
}

export default Navbar;