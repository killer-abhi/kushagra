import "./Home.css"
import Intro from "./IntroSection/Intro";
import Benefit from "./BenefitSection/Benefit";
import ReadyBanner from "./ReadyForJourney/ReadyBanner";
const Home = () => {
    return (
        <div className="home">
            <Intro />
            <Benefit/>
            <ReadyBanner/>
        </div>
    )
};
export default Home;