import { createContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormInputContext = createContext();

function RegisterForm() {
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const register = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/register', {
                studentId,
                password
            });
            navigate('/login');
        } catch(error) {
            // console.log(error);
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    return (
        <form method="POST">
            <div className="row">
                <div className="form-group col-6 m-auto">
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
                      onClick={register}
                    >Register
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

export default RegisterForm;
export { FormInputContext };