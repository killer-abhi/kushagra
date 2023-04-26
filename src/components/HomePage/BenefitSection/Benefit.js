import classes from "./benefit.module.css";

const Benefit=()=>{
    return(
        <div className={classes.benefit}>
            <h1>
                Benefits to Creators & Businesses
            </h1>
            <table cellSpacing={50}>
                <tr>
                    <td>
                        <img src="" alt="image1" />
                        <p>Unique Digital <br /> Presence</p>
                    </td>
                    <td>
                        <img src="" alt="image2" />
                        <p>Market and <br /> Promote</p>
                    </td>
                    <td>
                        <img src="" alt="image3" />
                        <p>Attract <br /> Audience</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="" alt="image4" />
                        <p>Engage <br /> Viewers</p>
                    </td>
                    <td>
                        <img src="" alt="image5" />
                        <p>Review and <br /> Rate</p>
                    </td>
                    <td>
                        <img src="" alt="image6" />
                        <p>Offerings and <br /> Promotion</p>
                    </td>
                </tr>
            </table>
        </div>

    )
};
export default Benefit