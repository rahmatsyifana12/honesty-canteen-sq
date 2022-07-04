import PropTypes from 'prop-types';

function LoginFormInput({type, propKey}) {
    return (
        <div className="form-group mb-3">
            <span className="me-2 mt-1 position-absolute"></span>
            <input type={type} className="form-control bg-transparent w-75 ps-4 border-0 border-bottom rounded-0 d-inline" name={propKey} placeholder={`Enter your ${propKey}`} />
        </div>
    );
}

LoginFormInput.propTypes = {
    type: PropTypes.string,
    propKey: PropTypes.string
};

export default LoginFormInput;