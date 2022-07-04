import { createContext, useState } from "react";
import { Link } from 'react-router-dom';
import LoginFormInput from "./LoginFormInput";

const FormInputContext = createContext();

function LoginForm() {
    const [data, setData] = useState({
        studentId: '',
        password: ''
    });

    const [errors, setErrors] = useState();

    return (
        <form action="/login" method="POST">
            <FormInputContext.Provider value={[data, setData, errors]}>
                <LoginFormInput type="text" propKey="username" iconName="user" />
                <LoginFormInput type="password" propKey="password" iconName="lock" />
            </FormInputContext.Provider>
            <button type="submit" className="btn">Login</button>
            <Link to="/" className="btn">Back</Link>
        </form>
    );
}

export default LoginForm;