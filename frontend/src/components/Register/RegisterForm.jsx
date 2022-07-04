import { createContext, useState } from "react";
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
            {/* <button type="submit" className="btn btn-gold w-75 mb-2" onClick={validateForm}><i className="fa fa-user-plus"></i> Register</button>
            <Link to="/login" className="btn btn-beige w-75"><i className="fa fa-arrow-left"></i> Back</Link> */}
        </form>
    );
}

export default RegisterForm;