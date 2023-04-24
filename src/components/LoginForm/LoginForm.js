import "./LoginForm.css";
import Button from "../UI/Button";
const LoginForm = () => {

    return (
        <div className="form">
            <div id="heading">Login</div>
            <input type="text" placeholder="Phone number, username, or email" />
            <Button className="otpBtn">Get OTP  -</Button>
            <div className="divider">
                or
            </div>
            <div className="googleLogin">
                <div className="googleSvg">

                </div>
                Login With Google
            </div>
            <div className="noAccount">
                Don't have a account? <a href="#">  Sign Up</a>
            </div>
        </div>
    )
};
export default LoginForm;