import "./Home.css"
import Intro from "./Intro";
import LoginForm from "../LoginForm/LoginForm";

const Home = () => {
    return (
        <div className="home">
            <Intro />
            <div className="arrow">
                <svg width="111" height="68" viewBox="0 0 111 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.88089 65.221C13.1842 41.397 48.6425 -4.23129 108.049 3.84742" stroke="#FF7A3D" stroke-width="4" stroke-linecap="round" />
                </svg>

            </div>
            <LoginForm />
        </div>
    )
};
export default Home;