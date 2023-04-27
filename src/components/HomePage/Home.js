import "./Home.css"
import Intro from "./IntroSection/Intro";
import Benefit from "./BenefitSection/Benefit";
import ReadyBanner from "./ReadyForJourney/ReadyBanner";
import Features from "./FeaturesSection/Features";
import CreateAndEvolve from "./CreateAndEvolve/CreateAndEvolve";
import DigitalPresence from "./DigitalPresence/DigitalPresence";
const Home = () => {
    return (
        <div className="home">
            <Intro />
            <Benefit/>
            <CreateAndEvolve/>
            <DigitalPresence/>
            <ReadyBanner/>
            <Features/>
        </div>
    )
};
export default Home;