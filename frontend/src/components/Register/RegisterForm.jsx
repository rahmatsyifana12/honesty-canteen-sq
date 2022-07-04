import { createContext, useState } from "react";
import { Link } from 'react-router-dom';
import RegisterFormInput from "./RegisterFormInput";

const FormInputContext = createContext();

function RegisterForm() {
    const [data, setData] = useState({
        studentId: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    return (
        <form action="/register" method="POST">
            <FormInputContext.Provider value={[data, setData, errors]}>
                <RegisterFormInput type="text" propKey="Student ID" />
                <RegisterFormInput type="password" propKey="Password" />
                <RegisterFormInput type="password" propKey="Confirm Password" />
            </FormInputContext.Provider>
            <button type="submit" className="btn">Register</button>
            <Link to="/login" className="btn">Back</Link>
        </form>
    );
}

export default RegisterForm;