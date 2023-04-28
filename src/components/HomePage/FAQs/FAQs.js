
import classes from "./faqs.module.css";
import Question from "./Question";
const FAQs=()=>{
    return(
        <div className={classes.faqSection}>
            <p>
                Frequently Asked Questions
            </p>
            <h1>Helping brands succeed</h1>
            <div className={classes.questions}>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
            </div>
        </div>
    )
};
export default FAQs;