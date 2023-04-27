import './createAndEvolve.css';

const CreateAndEvolve = () => {
    return (
        <div className="createAndEvolve">
            <div class="section-title">
                <h1>
                    Just 3 simple steps to Create and Evolve <br /> your Presence
                </h1>
                <svg width="162" height="15" viewBox="0 0 162 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13.1103C28.3082 6.04231 87 -7.88971 161.5 13.1103" stroke="#FF7A3D" stroke-width="3"/>
                </svg>
            </div>  
            <table cellSpacing={35}>
                <tr>
                    <td>
                        <img src="" alt="image1" />
                        <p class="card-title">Create your account</p>
                        <p class="card-desc">Simple password less signup process</p>
                    </td>
                    <td>
                        <img src="" alt="image2" />
                        <p class="card-title">Quickly create a Presence </p>
                        <p class="card-desc">Evolve your presence to Weave YOUR story</p>
                    </td>
                    <td>
                        <img src="" alt="image3" />
                        <p class="card-title">Promote and Engage</p>
                        <p class="card-desc">Share your presence globally and attract audience</p>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default CreateAndEvolve;