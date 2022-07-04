import PropTypes from 'prop-types';
function RegisterFormInput({ type, propKey }) {
    return (
        <div className="form">
            <input className="form-control" type={type} name={propKey} placeholder={`Enter your ${propKey}`} />
        </div>
    );
}

RegisterFormInput.propTypes = {
    type: PropTypes.string,
    propKey: PropTypes.string
};

export default RegisterFormInput;