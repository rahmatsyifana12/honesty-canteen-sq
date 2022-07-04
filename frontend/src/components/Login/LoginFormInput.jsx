import PropTypes from 'prop-types';

function LoginFormInput({type, propKey}) {
    return (
        <div className="form-group mb-3">
            <input type={type} className="form-control" name={propKey} placeholder={`Enter your ${propKey}`} />
        </div>
    );
}

LoginFormInput.propTypes = {
    type: PropTypes.string,
    propKey: PropTypes.string
};

export default LoginFormInput;