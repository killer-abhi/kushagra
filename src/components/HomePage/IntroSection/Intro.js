import "./Intro.css";
import LoginForm from "../../LoginForm/LoginForm";
const Intro = () => {

    return (
        <div className="introSection">
            <div className="intro">
                <div className="heading">
                    Enabling YOU to
                    Engage
                </div>
                <div className="description">
                    with CONTENT CREATORS and BUSINESSES and benefit from their CURATED CONTENT & OFFERINGS
                </div>
                <div className="followers">
                    <div className="image">

                    </div>
                </div>
            </div>
            <div className="arrow">
                <svg width="111" height="68" viewBox="0 0 111 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.88089 65.221C13.1842 41.397 48.6425 -4.23129 108.049 3.84742" stroke="#FF7A3D" stroke-width="4" stroke-linecap="round" />
                </svg>

            </div>
            <LoginForm />
        </div>
    )
};
export default Intro;