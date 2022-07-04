import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try{
            const response = await axios.post('http://localhost:5000/api/v1/auth/login', {
              studentId,
              password
            });

            const accessToken = response.data.data.accessToken;
            localStorage.setItem('accessToken', accessToken);

            navigate('/products');
          } catch(error) {
            if (error.response) {
                console.log(error.response.data);
            }
          }
    }

    const [errors, setErrors] = useState();

    return (
        <form method="POST">
            <div className="row">
                <div className="form-group col-6">
                    <input
                        onChange={(e) => setStudentId(e.target.value)}
                        id="student-id"
                        type="text"
                        className="form-control mb-4"
                        name="studentId"
                        placeholder="Student ID"
                        autoFocus
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        className="form-control mb-4"
                        name="password"
                        placeholder="Password"
                        autoFocus
                    />
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                      style={{ fontSize: "16px" }}
                      onClick={login}
                    >Login
                    </button>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block ms-2"
                        style={{ fontSize: "16px" }}
                        >Back
                        </button>
                    </Link>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;